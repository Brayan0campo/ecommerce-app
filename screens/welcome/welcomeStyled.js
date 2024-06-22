import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  align-items: center;
  background-color: white;
  flex: 1;
  gap: 32px;
  justify-content: center;
  padding: 30px;
`;

export const TextContainer = styled.View`
  align-items: center;
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #191717;
  font-weight: 900;
`;

export const Description = styled.Text`
  color: gray;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const WelcomeImage = styled.Image`
  width: 200px;
  height: 200px;
`;
