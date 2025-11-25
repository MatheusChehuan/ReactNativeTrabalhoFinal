import { View, Text, Alert, Button } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext';

export default function Home() {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    logout();
    Alert.alert("Logout", "Você saiu da conta.");
  };
  
  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" color="red" onPress={handleLogout} />
    </View>
  )
}