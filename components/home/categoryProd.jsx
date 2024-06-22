import React, { memo } from "react";
import { GridContainer, GridItem, GridIcon, GridText } from "./homeStyled";
import {
  ComputerIcon,
  SmartphoneIcon,
  TabletIcon,
  AccessoriesIcon,
} from "../../icons/products";

const categories = [
  { name: "Computadores", icon: <ComputerIcon /> },
  { name: "Smartphones", icon: <SmartphoneIcon /> },
  { name: "Tablets", icon: <TabletIcon /> },
  { name: "Accesorios", icon: <AccessoriesIcon /> },
];

const ProductGridComponent = () => (
  <GridContainer>
    {categories.map((category) => (
      <GridItem key={category.name}>
        <GridIcon>{category.icon}</GridIcon>
        <GridText>{category.name}</GridText>
      </GridItem>
    ))}
  </GridContainer>
);

export const ProductGrid = memo(ProductGridComponent);
