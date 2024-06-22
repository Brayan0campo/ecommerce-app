import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { CategoryList } from "./categoryList";
import { ROUTE } from "../../navigation/routes";
import { ActivityIndicator } from "react-native";
import { theme } from "../../configs/themeConfig";
import { useNavigation } from "@react-navigation/native";
import { useGetCategoriesQuery } from "../../services/shopService";
import { setCategorySelected } from "../../features/shop/shopSlice";
import {
  CategoriesContainer,
  CategoriesLoading,
  CategoriesText,
  CategoriesList,
} from "./homeStyled";

const CategoryComponent = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { data, isLoading } = useGetCategoriesQuery();

  const handlePress = (brand) => {
    dispatch(setCategorySelected(brand));
    navigate(ROUTE.ITEM_LIST_CATEGORIES, { brand });
  };

  if (isLoading) {
    return (
      <CategoriesLoading>
        <ActivityIndicator size="small" color={theme.colors.primary[600]} />
        <CategoriesText>Cargando categorías...</CategoriesText>
      </CategoriesLoading>
    );
  }

  return (
    <CategoriesContainer>
      <CategoriesText>Marcas top</CategoriesText>
      <CategoriesList
        contentContainerStyle={{ gap: 9 }}
        data={data}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryList name={item} onPress={() => handlePress(item)} />
        )}
      />
    </CategoriesContainer>
  );
};

export const Category = memo(CategoryComponent);
