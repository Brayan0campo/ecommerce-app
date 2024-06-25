import React, { memo } from "react";
import { formatPrice } from "../../utils/price";
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductText,
} from "./productsStyled";

const ProductItemComponent = ({ brand, image, model, onPress, price }) => {
  return (
    <ProductContainer onPress={onPress}>
      <ProductImage source={{ uri: image }} resizeMode="contain" />
      <ProductInfo>
        <ProductTitle>{brand}</ProductTitle>
        <ProductText>{model}</ProductText>
        <ProductText>{formatPrice(price)}</ProductText>
      </ProductInfo>
    </ProductContainer>
  );
};

export const ProductItem = memo(ProductItemComponent);
