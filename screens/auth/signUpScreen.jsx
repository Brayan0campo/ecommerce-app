import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../navigation/routes";
import { Button, Input, ButtonSocial } from "../../components/components";
import { Container, Section, TextTitle, Text } from "./authStyled";
import { useSignUp } from "../../hooks/useSignUp";
import Toast from "react-native-toast-message";

export const SignUp = () => {
  const { navigate } = useNavigation();
  const { formData, isLoading, handleChange, handleSignUp } = useSignUp();

  const goToLogin = () => navigate(ROUTE.LOGIN);

  return (
    <Container>
      <TextTitle>Crear una cuenta</TextTitle>
      <Section>
        <Input
          label="Correo electrónico"
          placeholder="Ingresa tu correo electrónico"
          onChangeText={(text) => handleChange("email", text)}
          value={formData.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          secureTextEntry
          onChangeText={(text) => handleChange("password", text)}
          value={formData.password}
          autoCapitalize="none"
        />
        <Input
          error={formData.errorConfirmPassword}
          label="Confirmar contraseña"
          placeholder="Confirma tu contraseña"
          secureTextEntry
          onChangeText={(text) => handleChange("confirmPassword", text)}
          value={formData.confirmPassword}
          autoCapitalize="none"
        />
        <Button onPress={handleSignUp}>
          {isLoading ? "Registrando..." : "Registrarse"}
        </Button>
        <ButtonSocial platform="google">Registrarse con Google</ButtonSocial>
        <ButtonSocial platform="facebook">
          Registrarse con Facebook
        </ButtonSocial>
      </Section>
      <Section>
        <Text>Ya tienes cuenta?</Text>
        <Button onPress={goToLogin}>Ingresar</Button>
      </Section>
      <Toast />
    </Container>
  );
};
