import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE } from "./routes";
import { Orders } from "../screens/orders/ordersScreen";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();

export const OrdersStack = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "Unbounded-Bold" },
        headerShadowVisible: false,
      }}
    >
      <StackScreen
        name={ROUTE.ORDERS}
        component={Orders}
        options={{
          headerTitle: "Ordenes",
        }}
      />
    </StackNavigator>
  );
};
