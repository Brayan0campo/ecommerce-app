import React, { useEffect, useState, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ProductItem, SearchInput } from "../../components/components";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ROUTE } from "../../navigation/routes";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../services/shopService";
import { theme } from "../../configs/themeConfig";
import { setCategorySelected } from "../../features/shop/shopSlice";

export const ItemListCategory = () => {
  const { navigate, setOptions } = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [textToSearch, setTextToSearch] = useState("");
  const category =
    route.params?.category ||
    useSelector((state) => state.shop.categorySeleted);

  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);

  const [productsFiltered, setProductsFiltered] = useState(products);

  useEffect(() => {
    if (route.params?.category) {
      dispatch(setCategorySelected(route.params.category));
    }
  }, [route.params?.category]);

  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  const navigateToItemDetails = (productId) =>
    navigate(ROUTE.SHOP_DETAIL, { productId });

  const capitalizeBrand = (brandToCapitalize) => {
    if (!brandToCapitalize) return "";
    const [firstLetter, ...restLetters] = brandToCapitalize;
    const brand = firstLetter.toUpperCase() + restLetters.join("");
    return brand;
  };

  const handleSearch = (textToSearch) => {
    setTextToSearch(textToSearch);
    const productsFiltered = products.filter((product) =>
      product.model.toLowerCase().includes(textToSearch.toLowerCase().trim())
    );
    setProductsFiltered(productsFiltered);
  };

  useFocusEffect(
    useCallback(() => {
      setOptions({ title: capitalizeBrand(category) });
    }, [category])
  );

  if (isLoading) {
    return (
      <View style={styles.itemListCategories}>
        <ActivityIndicator size="large" color={theme.colors.primary[600]} />
        <Text>Cargando productos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.itemListCategories}>
        <Text>Error al cargar productos</Text>
      </View>
    );
  }

  return (
    <View style={styles.itemListCategories}>
      <SearchInput
        onChangeText={handleSearch}
        placeholder="Buscar productos aquí..."
        value={textToSearch}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={productsFiltered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            {...item}
            onPress={() => navigateToItemDetails(item.id)}
          />
        )}
      />
      {productsFiltered && productsFiltered.length === 0 ? (
        <Text>
          No se han encontrado productos con la búsqueda "{textToSearch}"
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  brand: {
    fontFamily: "Unbounded-Bold",
    fontSize: 18,
    textTransform: "capitalize",
    textAlign: "center",
  },
  itemListCategories: {
    gap: 32,
    padding: 16,
    backgroundColor: "white",
    flex: 1,
  },
  list: {
    gap: 32,
  },
});
