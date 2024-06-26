import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatPrice } from "../../utils/price";
import { formatDate } from "../../utils/date";

export const OrderItem = ({ createdAt, total }) => (
  <View style={styles.orderItem}>
    <Text>{formatDate(createdAt)}</Text>
    <Text>{formatPrice(total)}</Text>
  </View>
);

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  orderText: {
    fontFamily: "Unbounded-Bold",
  },
});
