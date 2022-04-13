import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { AppDataProvider } from "./contexts/appData.context";
import { AuthProvider } from "./contexts/Auth.context";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import ApplicationContent from "./navigations";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadResourcesAsync = async () => {
    await Promise.all([
      Font.loadAsync({}),
    ]);
  };

  const handleLoadingError = (error) => {
    console.error(error);
  };

  const handleFinishLoading = () => {
    console.log("finished loading");
    setIsReady(true);
  };

      return !isReady ? (
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={handleFinishLoading}
          autoHideSplash={true}
        />
      ) : (
        <AppDataProvider>
          <AuthProvider>
            <NavigationContainer>
              <ApplicationContent />
            </NavigationContainer>
          </AuthProvider>
        </AppDataProvider>
      )
}
