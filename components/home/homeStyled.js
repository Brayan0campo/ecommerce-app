import styled from "styled-components/native";

export const BannerContainer = styled.ImageBackground`
  overflow: hidden;
  border-radius: 16px;
`;

export const BannerContent = styled.View`
  padding: 100px;
`;

export const CategoriesContainer = styled.View`
  gap: 10px;
`;

export const CategoriesLoading = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const CategoriesText = styled.Text`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 8px;
`;

export const CategoriesList = styled.FlatList`
  gap: 9px;
`;

export const CategoryContainer = styled.Pressable`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: #191717;
`;

export const CategoryText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

export const GridContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const GridItem = styled.View`
  width: 48%;
  height: 100px;
  border-radius: 7px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  background-color: #191717;
`;

export const GridIcon = styled.View`
  margin-bottom: 8px;
`;

export const GridText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 900;
`;
