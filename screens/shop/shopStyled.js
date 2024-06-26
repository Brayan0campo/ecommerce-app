import styled from "styled-components/native";
import { theme } from "../../configs/themeConfig";

export const Container = styled.View`
  gap: 25px;
`;

export const ImageContainer = styled.Image`
  width: 100%;
  height: 270px;
`;

export const Info = styled.View`
  gap: 8px;
`;

export const TitleSection = styled.Text`
  font-size: 20px;
  font-weight: 800;
`;

export const Text = styled.Text`
  text-transform: capitalize;
`;

export const Colors = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ColorOption = styled.Pressable`
  border-width: 2px;
  border-color: ${(props) =>
    props.isSelected ? theme.colors.black : theme.colors.gray[400]};
  height: 50px;
  width: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isSelected ? theme.colors.black : theme.colors.white};
`;

export const ColorText = styled.Text`
  color: ${(props) =>
    props.isSelected ? theme.colors.white : theme.colors.gray[500]};
  font-weight: ${(props) => (props.isSelected ? "800" : "600")};
`;

export const ItemDetailContainer = styled.SafeAreaView`
  padding-top: 0;
  padding-horizontal: 16px;
  background-color: ${theme.colors.white};
`;

export const ScrollViewContainer = styled.ScrollView``;
