import React, { memo } from "react";
import { Text } from "react-native";
import { formatPrice } from "../../utils/price";
import {
  CartItemContainer,
  ProductImage,
  InfoContainer,
  BrandText,
  DeleteButton,
  DeleteButtonText,
} from "./cartStyled";

const CartItemComponent = ({
  id,
  brand,
  image,
  model,
  color,
  quantity,
  price,
  onDelete,
}) => (
  <CartItemContainer>
    <ProductImage source={{ uri: image }} />
    <InfoContainer>
      <BrandText>{brand}</BrandText>
      <Text>{model}</Text>
      <Text>Color: {color}</Text>
      <Text>Cantidad: {quantity}</Text>
      <Text>{formatPrice(price)}</Text>
      <DeleteButton onPress={() => onDelete(id)}>
        <DeleteButtonText>Eliminar</DeleteButtonText>
      </DeleteButton>
    </InfoContainer>
  </CartItemContainer>
);

export const CartItem = memo(CartItemComponent);
