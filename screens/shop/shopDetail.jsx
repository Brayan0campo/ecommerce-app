import React, { useEffect, useState, memo } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/price";
import { addItem } from "../../features/cart/cartSlice";
import { Button } from "../../components/components";
import {
  Container,
  ImageContainer,
  Info,
  TitleSection,
  Text,
  Colors,
  ColorOption,
  ColorText,
  ItemDetailContainer,
  ScrollViewContainer,
} from "./shopStyled";
import { useGetProductsByIdQuery } from "../../services/shopService";

const ShopDetailComponent = () => {
  const { params } = useRoute();
  const { goBack, setOptions } = useNavigation();
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState();
  const {
    data: item,
    isLoading,
    error,
  } = useGetProductsByIdQuery(params.productId);

  const colors = ["Negro", "Blanco", "Azul", "Rojo", "Dorado"];

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    dispatch(addItem({ ...item, color: selectedColor }));
    goBack();
  };

  useEffect(() => {
    if (item) {
      setOptions({ title: item.model });
    }
  }, [item, setOptions]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading product</Text>;

  if (!item) return null;

  const { brand, image, model, price } = item;

  return (
    <ItemDetailContainer>
      <ScrollViewContainer>
        <Container>
          <ImageContainer source={{ uri: image }} resizeMode="contain" />
          <TitleSection>Detalle</TitleSection>
          <Info>
            <Text>{brand}</Text>
            <Text>{model}</Text>
            <Text>{formatPrice(price)}</Text>
          </Info>
          <TitleSection>Color</TitleSection>
          <Colors>
            {colors.map((color) => {
              const isSelected = selectedColor === color;
              return (
                <ColorOption
                  key={color}
                  isSelected={isSelected}
                  onPress={() => handleColor(color)}
                >
                  <ColorText isSelected={isSelected}>{color}</ColorText>
                </ColorOption>
              );
            })}
          </Colors>
          <Button onPress={handleAddToCart}>Agregar al carrito</Button>
        </Container>
      </ScrollViewContainer>
    </ItemDetailContainer>
  );
};

export const ShopDetail = memo(ShopDetailComponent);
