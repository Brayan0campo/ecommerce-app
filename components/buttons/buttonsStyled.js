import styled from "styled-components/native";

export const StyledButton = styled.Pressable`
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  opacity: ${(props) => (props.pressed ? 0.8 : 1)};
  background-color: ${(props) => (props.disabled ? "#B2B2B2" : "#191717")};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const StyledButtonSocial = styled.Pressable`
  padding: 10px;
  margin-top: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.disabled ? "#B2B2B2" : "#DDDDDD")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const ButtonTextSocial = styled.Text`
  color: #191717;
  font-size: 14px;
  font-weight: bold;
  margin-left: 9px;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
