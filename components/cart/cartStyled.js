import styled from "styled-components/native";
import { theme } from "../../configs/themeConfig";

export const CartItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const ProductImage = styled.Image`
  height: 210px;
  width: 160px;
`;

export const InfoContainer = styled.View`
  gap: 8px;
  flex: 1;
`;

export const BrandText = styled.Text`
  font-size: 16px;
  font-weight: 900;
`;

export const DeleteButton = styled.Pressable`
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-radius: 4px;
  background-color: #191717;
  width: 96px;
  align-items: center;
`;

export const DeleteButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
