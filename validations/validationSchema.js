import { object, string, ref } from "yup";

export const loginSchema = object().shape({
  password: string()
    /*     .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Contraseña debe contener al menos una letra y un número"
    ) */
    .min(6, "Contraseña debe tener al menos 6 caracteres")
    .required("El campo de contraseña es requerido"),
  email: string()
    .email("Ingrese un correo válido, ejemplo: user@ecommerce.com")
    .required("El campo de correo electrónico es requerido"),
});

export const signupSchema = object().shape({
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas no coinciden")
    .required("El campo de confirmar contraseña es requerido"),
  password: string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Contraseña debe contener al menos una letra y un número"
    )
    .min(6, "La contraseña debe contener como minimo 6 caracteres")
    .required("El campo de contraseña es requerido"),
  email: string()
    .email("Ingrese un correo válido, ejemplo: user@ecommerce.com")
    .required("El campo de correo electrónico es requerido"),
});
