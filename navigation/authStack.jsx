import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE } from "./routes";
import { Login } from "../screens/auth/loginScreen";
import { SignUp } from "../screens/auth/signUpScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthStack = () => (
  <Navigator
    initialRouteName={ROUTE.LOGIN}
    screenOptions={{
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitleStyle: { fontFamily: "Unbounded-Bold" },
    }}
  >
    <Screen name={ROUTE.LOGIN} component={Login} />
    <Screen name={ROUTE.SIGN_UP} component={SignUp} />
  </Navigator>
);
