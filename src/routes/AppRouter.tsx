import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home/Home";
import Sobre from "../screens/Sobre/Sobre";
import Login from "../screens/Login/Login";
import { AuthContext } from '../context/AuthContext';
import Teste from '../screens/Teste/Teste';
import Cadastro from '../screens/Cadastro/Cadastro';

export type RootTabParamList = {
    Home:undefined;
    Sobre:undefined;
    Login:undefined;
    Teste:undefined;
    Cadastro:undefined;

};

const Tab = createBottomTabNavigator<RootTabParamList>(); //cria navegação bottom tabs

export default function AppRouter() {
const {token} = useContext(AuthContext);
  return (
    <Tab.Navigator>
        {!token ? ( //se não tem token
      <Tab.Screen name="Login" component={Login}/>
        ) : ( //caso tenha, executa o
        <>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Teste" component={Teste}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </>
    )}
    <Tab.Screen name="Cadastro" component={Cadastro}/>
    </Tab.Navigator>
    
  )
}