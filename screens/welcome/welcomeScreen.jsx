import React from "react";
import { Button } from "../../components/components";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../navigation/routes";
import { SafeArea, TextContainer, Title, Description, WelcomeImage } from "./welcomeStyled";

export const Welcome = ({ onComplete }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    onComplete();
    navigation.navigate(ROUTE.AUTH);
  };

  return (
    <SafeArea>
      <WelcomeImage source={require("../../assets/Welcome/Welcome.png")} />
      <TextContainer>
        <Title>Ecommerce-App</Title>
        <Description>
          Todo lo que necesitas en tecnología en un solo lugar
        </Description>
      </TextContainer>
      <Button onPress={handlePress}>Comenzar</Button>
    </SafeArea>
  );
};
