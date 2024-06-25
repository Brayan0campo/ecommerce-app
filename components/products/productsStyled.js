import styled from "styled-components/native";
import { theme } from "../../configs/themeConfig";

export const ProductContainer = styled.Pressable`
  border-radius: 16px;
  overflow: hidden;
  background-color: ${theme.colors.white};
  margin-bottom: 16px;
`;

export const ProductImage = styled.Image`
  height: 160px;
  background-color: ${theme.colors.white};
`;

export const ProductInfo = styled.View`
  gap: 4px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${theme.colors.lightGray};
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  text-transform: capitalize;
`;

export const ProductText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.darkGray};
`;

export const SearchContainer = styled.View`
  border-color: ${theme.colors.gray[200]};
  border-radius: 8px;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  background-color: ${theme.colors.white};
  ${(props) =>
    props.isFocused &&
    `
    border-color: ${theme.colors.black};
  `}
`;

export const SearchTextInput = styled.TextInput`
  flex: 1;
  padding-horizontal: 8px;
  font-size: 16px;
  color: ${theme.colors.text};
`;

export const PlaceholderColor = styled.Text`
  color: ${theme.colors.gray[400]};
`;
