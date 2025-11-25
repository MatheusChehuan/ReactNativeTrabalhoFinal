import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes/AppRouter'
import AuthProvider from './src/context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <AppRouter/>
    </NavigationContainer>
    </AuthProvider>
  )
}