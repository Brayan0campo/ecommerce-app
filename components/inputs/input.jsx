import React, { useState, memo } from "react";
import {
  InputContainer,
  InputLabel,
  InputText,
  InputError,
} from "./inputsStyled";

const InputComponent = ({ error, label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputText
        {...props}
        placeholderTextColor="#B4B4B8"
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && <InputError>{error}</InputError>}
    </InputContainer>
  );
};

export const Input = memo(InputComponent);
