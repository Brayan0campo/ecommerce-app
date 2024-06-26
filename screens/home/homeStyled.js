import styled from "styled-components/native";
import { theme } from "../../configs/themeConfig";

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
  padding-top: 0;
  gap: 32px;
  background-color: ${theme.colors.white};
`;
