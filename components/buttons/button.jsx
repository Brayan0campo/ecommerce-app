import React, { memo } from "react";
import { StyledButton, ButtonText } from "./buttonsStyled";

const ButtonComponent = ({ children, onPress, disabled, style }) => (
  <StyledButton
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [style, { opacity: pressed ? 0.8 : 1 }]}
  >
    <ButtonText>{children}</ButtonText>
  </StyledButton>
);

export const Button = memo(ButtonComponent);
