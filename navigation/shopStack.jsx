import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/home";
import { ItemListCategory } from "../screens/search/searchProduct";
import { ShopDetail } from "../screens/shop/shopDetail";
import { ROUTE } from "./routes";
import { Logout } from "../icons/logout";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();

export const ShopStack = () => (
  <StackNavigator
    screenOptions={{
      headerTitleStyle: { fontFamily: "Unbounded-Bold" },
      headerShadowVisible: false,
      headerRight: () => <Logout />,
    }}
  >
    <StackScreen
      name={ROUTE.HOME}
      component={Home}
      options={{
        headerTitle: "Tienda",
        headerBackVisible: false,
      }}
    />
    <StackScreen
      name={ROUTE.ITEM_LIST_CATEGORIES}
      component={ItemListCategory}
      options={{
        headerShown: true,
      }}
    />
    <StackScreen name={ROUTE.SHOP_DETAIL} component={ShopDetail} />
  </StackNavigator>
);
