import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { styles } from "./styles";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleCadastro() {
    if (!nome || !email || !senha) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    try {
    const resposta = await api.post("/cadastro", {nome,email,senha,
      usuarioPerfis: [
        {
          perfil: { id: 6 }
        }
      ]
    });

Alert.alert("Conta criada com sucesso!");

      navigation.navigate("Login");

    } catch (erro) {
      alert("Erro ao cadastrar! Tente novamente.");
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.areaInput}>
        <TextInput placeholder="Seu nome" style={styles.input}value={nome}onChangeText={setNome}/>
      </View>

      <View style={styles.areaInput}>
        <TextInput placeholder="Seu email" style={styles.input}value={email}onChangeText={setEmail}/>
      </View>

      <View style={styles.areaInput}>
        <TextInput placeholder="Sua senha" style={styles.input} value={senha}onChangeText={setSenha} secureTextEntry/>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleCadastro}>
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}
