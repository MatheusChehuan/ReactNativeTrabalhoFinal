import {View,Text,Alert,TextInput,Image,TouchableOpacity,} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try { //try um post no endpoint login enviando username e password no body
      const resp = api.post("/login", { username, password });
      const { token } = (await resp).data;
        //token bearer recebido na variavel token 
      if (!token) { //se vier vazio, credencial invalida
        Alert.alert("Credenciais do token inválidas!");
        return;
      }

      await AsyncStorage.setItem("token", token); //armazena o token no async storage
      setToken(token); //seta o token
    } catch (error) { //caso contrario
      Alert.alert("Usuário ou senha inválidos!"); //pop up falando que deu merda
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/icon.png")} />
      <View style={styles.areaInput}>
        <TextInput placeholder="Seu email" value={username} onChangeText={setUsername} style={styles.input}/>
      </View>

      <View style={styles.areaInput}>
        <TextInput placeholder="Sua senha" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry/>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}