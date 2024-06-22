import React, { memo } from "react";
import { BannerContainer, BannerContent } from "./homeStyled";

const BannerComponent = () => (
  <BannerContainer
    source={require("../../assets/home/banner.jpg")}
    resizeMode="cover"
  >
    <BannerContent />
  </BannerContainer>
);

export const Banner = memo(BannerComponent);
