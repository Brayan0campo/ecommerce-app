import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../navigation/routes";
import { Input, Button, ButtonSocial } from "../../components/components";
import { Container, Section, TextPass, Text, TextTitle } from "./authStyled";
import { useLogin } from "../../hooks/useLogin";
import Toast from "react-native-toast-message";

export const Login = () => {
  const { navigate } = useNavigation();
  const { formData, isLoading, handleChange, handleLogin } = useLogin();

  const goToSignUp = () => navigate(ROUTE.SIGN_UP);

  return (
    <Container>
      <TextTitle>Ingresa con tu cuenta</TextTitle>
      <Section>
        <Input
          label="Correo electrónico"
          placeholder="Ingresa tu correo electrónico"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          autoCapitalize="none"
        />
        <TextPass>Olvidé mi contraseña</TextPass>
        <Button onPress={handleLogin}>
          {isLoading ? "Ingresando..." : "Ingresar"}
        </Button>
        <ButtonSocial platform="google">Ingresar con Google</ButtonSocial>
        <ButtonSocial platform="facebook">Ingresar con Facebook</ButtonSocial>
      </Section>
      <Section>
        <Text>Aun no tienes cuenta?</Text>
        <Button onPress={goToSignUp}>Ir a registro</Button>
      </Section>
      <Toast />
    </Container>
  );
};
