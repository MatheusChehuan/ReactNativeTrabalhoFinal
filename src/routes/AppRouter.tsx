import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Home from "../screens/Home/Home";
import Sobre from "../screens/Sobre/Sobre";
import Login from "../screens/Login/Login";
import { AuthContext } from '../context/AuthContext';
import { AoVivo } from '../screens/AoVivo/AoVIvo';
import Cadastro from '../screens/Cadastro/Cadastro';
import Yuri from "../screens/Membros/Yuri";
import Matheus from "../screens/Membros/Matheus";
import Kaue from "../screens/Membros/Kaue";
import Rodrigo from "../screens/Membros/Rodrigo";
import Raphael from "../screens/Membros/Raphael";
import Tabela from "../screens/Tabela/Tabela";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type RootTabParamList = {
  Home: undefined;
  Sobre: undefined;
  AoVivo: undefined;
  Tabela: undefined;
  Yuri: undefined;
  Matheus: undefined;
  Kaue: undefined;
  Rodrigo: undefined;
  Raphael: undefined;
  Login: undefined;
  Cadastro: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootTabParamList>();

function SobreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
      <Stack.Screen name="Yuri" component={Yuri} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: '#1C1C1C' }, headerTintColor: '#FFF', headerBackTitleVisible: false }} />
      <Stack.Screen name="Matheus" component={Matheus} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: '#1C1C1C' }, headerTintColor: '#FFF', headerBackTitleVisible: false }} />
      <Stack.Screen name="Kaue" component={Kaue} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: '#1C1C1C' }, headerTintColor: '#FFF', headerBackTitleVisible: false }} />
      <Stack.Screen name="Rodrigo" component={Rodrigo} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: '#1C1C1C' }, headerTintColor: '#FFF', headerBackTitleVisible: false }} />
      <Stack.Screen name="Raphael" component={Raphael} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: '#1C1C1C' }, headerTintColor: '#FFF', headerBackTitleVisible: false }} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Sobre') iconName = focused ? 'information-circle' : 'information-circle-outline';
          else if (route.name === 'AoVivo') iconName = focused ? 'football' : 'football-outline';
          else if (route.name === 'Tabela') iconName = focused ? 'list' : 'list-outline';
          else iconName = 'help-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2ecc71',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarStyle: {
          backgroundColor: '#1C1C1C',
          borderTopColor: '#333333',
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AoVivo" component={AoVivo} />
      <Tab.Screen name="Tabela" component={Tabela} />
      <Tab.Screen name="Sobre" component={SobreStack} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function AppRouter() {
  const { token } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {!token ? (
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}