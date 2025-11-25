import {View,Text,Alert,TextInput,Image,TouchableOpacity} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Cadastro from '../../screens/Cadastro/Cadastro';

export default function Login() {
  const navigation = useNavigation();
  const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const handleLogin = async () => {
    try {
      const resp = await api.post("/login", {email: email,senha: password});
      const { token } = resp.data;

      if (!token) {
        Alert.alert("Credenciais do token inválidas!");
        return;
      }

    await AsyncStorage.setItem("token", token);
    setToken(token);         

    } catch (error) {
      Alert.alert("Usuário ou senha inválidos!");
    }
  };

  const navigateCadastro = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/icon.png")} />

      <View style={styles.areaInput}>
        <TextInput placeholder="Seu email" value={email} onChangeText={setEmail} style={styles.input}/>
      </View>

      <View style={styles.areaInput}>
        <TextInput placeholder="Sua senha" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry/>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={navigateCadastro}>
        <Text style={styles.submitText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
