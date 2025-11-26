import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from "../screens/Home/Home";
import Sobre from "../screens/Sobre/Sobre";
import Login from "../screens/Login/Login";
import { AuthContext } from '../context/AuthContext';
import { AoVivo } from '../screens/AoVivo/AoVIvo'; 
import Cadastro from '../screens/Cadastro/Cadastro';

export type RootTabParamList = {
    Home:undefined;
    Sobre:undefined;
    Login:undefined;
    AoVivo:undefined;
    Cadastro:undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppRouter() {
const {token} = useContext(AuthContext);

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: keyof typeof Ionicons.glyphMap;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Sobre') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                } else if (route.name === 'AoVivo') {
                    iconName = focused ? 'football' : 'football-outline';
                } else if (route.name === 'Cadastro') {
                    iconName = focused ? 'person-add' : 'person-add-outline';
                } else {
                    iconName = 'help-circle-outline'; 
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2ecc71',
            tabBarInactiveTintColor: '#A9A9A9',
            tabBarStyle: {
                backgroundColor: '#1C1C1C',
                borderTopColor: '#333333',
                height: 60,
                paddingBottom: 5,
            }
        })}
    >
      {!token ? (
      <Tab.Screen name="Login" component={Login}/>
      ) : (
      <>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="AoVivo" component={AoVivo}/> 
        <Tab.Screen name="Sobre" component={Sobre}/>
      </>
      )}
      <Tab.Screen name="Cadastro" component={Cadastro} options={{tabBarItemStyle:{display: 'none'}}}/>
    </Tab.Navigator>
    
  )
}