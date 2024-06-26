import React, { memo } from "react";
import { Banner, Category, ProductGrid } from "../../components/components";
import { HomeContainer } from "./homeStyled";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <Banner />
      <Category />
      <ProductGrid />
    </HomeContainer>
  );
};

export const Home = memo(HomeComponent);
