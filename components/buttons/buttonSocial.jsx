import React, { memo } from "react";
import {
  StyledButtonSocial,
  ButtonTextSocial,
  IconWrapper,
} from "./buttonsStyled";
import { GoogleIcon, FacebookIcon } from "../../icons/icons";

const ButtonSocialComponent = ({
  platform,
  children,
  onPress,
  disabled,
  style,
}) => {
  const renderIcon = () => {
    switch (platform) {
      case "google":
        return <GoogleIcon />;
      case "facebook":
        return <FacebookIcon />;
      default:
        return null;
    }
  };

  return (
    <StyledButtonSocial
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [style, { opacity: pressed ? 0.8 : 1 }]}
    >
      <IconWrapper>{renderIcon()}</IconWrapper>
      <ButtonTextSocial>{children}</ButtonTextSocial>
    </StyledButtonSocial>
  );
};

export const ButtonSocial = memo(ButtonSocialComponent);
