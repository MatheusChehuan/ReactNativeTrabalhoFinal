import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [times, setTimes] = useState([]);
  const [timeEscolhido, setTimeEscolhido] = useState<number | null>(null);

  useEffect(() => {
    async function carregarTimes() {
      try {
        const resposta = await axios.get(
          "https://api.football-data.org/v4/competitions/BSA/teams",
          {
            headers: { "X-Auth-Token": "ff34e45f2b0b46e98add24ebc0aa1c89" },
          }
        );

        setTimes(resposta.data.teams);

      } catch (error: any) {
        console.log(
          "Erro ao buscar times:",
          error.response?.status,
          error.response?.data
        );
        Alert.alert("Erro", "Não foi possível carregar os times.");
      }
    }

    carregarTimes();
  }, []);

  async function handleCadastro() {
    if (!nome || !email || !senha || !timeEscolhido) {
      Alert.alert("Preencha todos os campos e selecione um time!");
      return;
    }

    try {
      await api.post("/cadastro", {
        nome,
        email,
        senha,
        idTime: Number(timeEscolhido),
      });

      Alert.alert("Conta criada com sucesso!");
      navigation.navigate("Login");

    } catch (erro) {
      console.log("ERRO NO CADASTRO:", erro);
      Alert.alert("Erro ao cadastrar! Tente novamente.");
    }
  }

  return (
    <View style={styles.container}>


      <Image
  source={require("../../../assets/serrabet.png")}
  style={styles.imageLogo}
/>

      <View style={styles.areaInput}>
        <TextInput
          placeholder="Seu nome"
          placeholderTextColor="#AAA"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.areaInput}>
        <TextInput
          placeholder="Seu email"
          placeholderTextColor="#AAA"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.areaInput}>
        <TextInput
          placeholder="Sua senha"
          placeholderTextColor="#AAA"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <Text style={styles.pickerLabel}>Escolha seu time do coração</Text>

      <Picker
        selectedValue={timeEscolhido}
        onValueChange={(v) => setTimeEscolhido(Number(v))}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um time..." value={null} />

        {times.map((t: any) => (
          <Picker.Item key={t.id} label={t.name} value={t.id} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.submitButton} onPress={handleCadastro}>
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}
