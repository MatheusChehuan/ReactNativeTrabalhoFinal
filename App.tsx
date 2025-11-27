import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes/AppRouter'
import AuthProvider from './src/context/AuthContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  )
}