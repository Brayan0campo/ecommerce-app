import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { OrderItem } from "../../components/order/orderItem";
import { useGetOrdersQuery } from "../../services/shopService";

export const Orders = () => {
  const { data: orders, isLoading, error, refetch } = useGetOrdersQuery();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Text>Cargando pedidos...</Text>;
  }

  if (error) {
    return <Text>Error cargando pedidos: {error.message}</Text>;
  }

  return (
    <View style={styles.orders}>
      <FlatList
        contentContainerStyle={styles.list}
        data={orders}
        renderItem={({ item }) => <OrderItem {...item} />}
        ListEmptyComponent={<Text>No hay pedidos</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orders: {
    backgroundColor: "white",
    minHeight: "100%",
  },
  list: {
    gap: 32,
  },
});
