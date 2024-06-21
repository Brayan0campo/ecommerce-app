import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const InputLabel = styled.Text`
  color: #0f0f0f;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const InputText = styled.TextInput`
  padding: 8px;
  font-weight: 600;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${(props) => (props.isFocused ? "#0f0f0f" : "#ccc")};
`;

export const InputError = styled.Text`
  color: red;
  font-size: 14px;
  margin-top: 2px;
`;
