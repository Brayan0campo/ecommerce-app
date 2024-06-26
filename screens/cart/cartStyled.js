import styled from "styled-components/native";
import { theme } from "../../configs/themeConfig";

export const CartContainer = styled.View`
  min-height: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  padding: 16px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const TotalText = styled.Text`
  font-size: 19px;
  font-weight: 900;
`;

export const EmptyCartText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: ${theme.colors.gray[500]};
`;
