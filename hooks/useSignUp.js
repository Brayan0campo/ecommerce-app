import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSignUpMutation } from "../services/authService";
import { signupSchema } from "../validations/validationSchema";
import { ROUTE } from "../navigation/routes";
import Toast from "react-native-toast-message";

export const useSignUp = () => {
  const { navigate } = useNavigation();
  const [triggerSignUp, result] = useSignUpMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      await signupSchema.validate(formData, { abortEarly: false });
      setIsLoading(true);
      await triggerSignUp({
        email: formData.email,
        password: formData.password,
      }).unwrap();
      Toast.show({
        type: "success",
        text1: "Registro exitoso",
        text2: "Ahora puedes iniciar sesión",
      });
      setTimeout(() => {
        navigate(ROUTE.LOGIN);
      }, 2000);
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
          text1: "Error",
          text2: "Error en la solicitud de registro",
        });
      }
    }
  };

  useEffect(() => {
    if (result.isError) {
      setIsLoading(false);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Error en la solicitud de registro",
      });
    }
  }, [result.isError]);

  return {
    formData,
    isLoading,
    handleChange,
    handleSignUp,
  };
};
