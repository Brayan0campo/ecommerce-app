import React, { memo } from "react";
import { CategoryContainer, CategoryText } from "./homeStyled";

const CategoryListComponent = ({ name, onPress }) => (
  <CategoryContainer onPress={onPress}>
    <CategoryText>{name}</CategoryText>
  </CategoryContainer>
);

export const CategoryList = memo(CategoryListComponent);
