import React, { useCallback, memo } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../../features/cart/cartSlice";
import { usePostOrderMutation } from "../../services/shopService";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../navigation/routes";
import { CartItem } from "../../components/cart/cartItems";
import { formatPrice } from "../../utils/price";
import { Button } from "../../components/buttons/button";
import {
  CartContainer,
  TotalContainer,
  TotalText,
  EmptyCartText,
} from "./cartStyled";

const CartComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.cart.value.user);
  const items = useSelector((state) => state.cart.value.items);
  const total = useSelector((state) => state.cart.value.total);
  const [triggerPost, { isLoading }] = usePostOrderMutation();

  const cartIsEmpty = items.length === 0;

  const handleDelete = useCallback(
    (item) => {
      dispatch(removeItem(item));
    },
    [dispatch]
  );

  const confirmOrder = useCallback(async () => {
    const createdAt = new Date().toISOString();
    await triggerPost({ items, total, user, createdAt });
    Toast.show({
      type: "success",
      text1: "Compra confirmada",
      text2: "Tu orden ha sido realizada exitosamente",
    });
    setTimeout(() => {
      dispatch(clearCart());
      navigation.navigate(ROUTE.ORDERS, { refresh: true });
    }, 1500);
  }, [items, total, user, triggerPost, dispatch, navigation]);

  return (
    <CartContainer>
      <FlatList
        contentContainerStyle={{ gap: 32 }}
        data={items}
        renderItem={({ item }) => (
          <CartItem {...item} onDelete={() => handleDelete(item)} />
        )}
        ListEmptyComponent={
          <EmptyCartText>No hay productos en el carrito</EmptyCartText>
        }
      />
      <TotalContainer>
        <TotalText>Total</TotalText>
        <TotalText>{formatPrice(total)}</TotalText>
      </TotalContainer>
      {!cartIsEmpty && (
        <Button
          style={{ marginBottom: 16 }}
          disabled={cartIsEmpty || isLoading}
          onPress={confirmOrder}
        >
          {isLoading ? "Procesando..." : "Confirmar compra"}
        </Button>
      )}
      <Toast />
    </CartContainer>
  );
};

export const Cart = memo(CartComponent);
