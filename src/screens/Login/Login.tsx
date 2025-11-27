import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const { setLoginData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const resp = await api.post("/login", {
        email: email,
        senha: password,
      });

      console.log("RESP LOGIN >>>", resp.data);

      const { token, nome, idTime } = resp.data;

      if (!token) {
        Alert.alert("Erro", "Token inválido!");
        return;
      }

      setLoginData(token, nome, idTime);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Usuário ou senha inválidos!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/serrabet.png")}
        />

        <View style={styles.areaInput}>
          <TextInput
            placeholder="Seu email"
            placeholderTextColor="#EAEAEA"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.areaInput}>
          <TextInput
            placeholder="Sua senha"
            placeholderTextColor="#EAEAEA"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.submitText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
