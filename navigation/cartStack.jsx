import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens/cart/cartScreen";
import { ROUTE } from "./routes";
import { Orders } from "../screens/orders/ordersScreen";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();

export const CartStack = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "Unbounded-Bold" },
        headerShadowVisible: false,
      }}
    >
      <StackScreen
        name={ROUTE.CART}
        component={Cart}
        options={{
          headerTitle: "Carrito",
        }}
      />
      <StackScreen
        name={ROUTE.ORDERS}
        component={Orders}
        options={{ headerTitle: "Ordenes" }}
      />
    </StackNavigator>
  );
};
