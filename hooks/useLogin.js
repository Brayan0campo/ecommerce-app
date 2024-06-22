import { insertSession } from "../db";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setUser } from "../features/auth/authSlice";
import { useLoginMutation } from "../services/authService";
import { loginSchema } from "../validations/validationSchema";
import Toast from "react-native-toast-message";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [triggerLogin, result] = useLoginMutation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      setIsLoading(true);
      const response = await triggerLogin(formData).unwrap();

      const { email, localId, idToken: token } = response;
      dispatch(setUser({ email, localId, token }));
      insertSession({ email, localId, token });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.name === "ValidationError") {
        error.inner.forEach((err) => {
          Toast.show({
            type: "error",
            text1: "Error de validación",
            text2: err.message,
          });
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error de autenticación",
          text2: "Correo o contraseña incorrectos",
        });
      }
    }
  };

  useEffect(() => {
    if (result.isError) {
      setIsLoading(false);
    }
  }, [result.isError]);

  return {
    formData,
    isLoading,
    handleChange,
    handleLogin,
  };
};
