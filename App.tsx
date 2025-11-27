import { View, Text, Alert } from "react-native";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/routes/AppRouter";
import AuthProvider from "./src/context/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  const mostrouAlerta = useRef(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected === false && !mostrouAlerta.current) {
        mostrouAlerta.current = true;

        setTimeout(() => {
          Alert.alert(
            "Sem Internet",
            "Você está offline. Verifique sua conexão."
          );
        }, 200);
      }

      if (state.isConnected === true) {
        mostrouAlerta.current = false;
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
