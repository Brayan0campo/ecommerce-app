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
