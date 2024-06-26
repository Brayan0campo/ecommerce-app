import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserLocationQuery,
  useGetProfileImageQuery,
} from "../services/shopService";
import {
  setUserPhoto,
  setUser,
  setUserLocation,
} from "../features/auth/authSlice";
import { fetchSession } from "../db";
import { Welcome } from "../screens/welcome/welcomeScreen";
import { AuthStack } from "./authStack";
import { TabNavigator } from "./tabNavigator";
import { ROUTE } from "./routes";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth.value.user);
  const { data: profileImage } = useGetProfileImageQuery(localId);
  const { data: userLocation } = useGetUserLocationQuery(localId);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const session = await fetchSession();
      if (session) {
        dispatch(setUser(session));
      }
    };
    getSession();
  }, []);

  useEffect(() => {
    if (profileImage) {
      dispatch(setUserPhoto(profileImage.image));
    }
  }, [profileImage]);

  useEffect(() => {
    if (userLocation) {
      dispatch(setUserLocation(userLocation));
    }
  }, [userLocation]);

  const handleWelcomeComplete = () => {
    setIsFirstLaunch(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isFirstLaunch ? (
          <Stack.Screen name={ROUTE.WELCOME}>
            {(props) => (
              <Welcome {...props} onComplete={handleWelcomeComplete} />
            )}
          </Stack.Screen>
        ) : localId ? (
          <Stack.Screen name={ROUTE.MAIN} component={TabNavigator} />
        ) : (
          <Stack.Screen name={ROUTE.AUTH} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
