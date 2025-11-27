import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Matheus() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>

      <View style={styles.card}>
        <View style={styles.topo}>
          <Image source={require("../../../assets/Matheus.jpg")} style={styles.foto} />
          <Text style={styles.nome}>Matheus</Text>
        </View>

        <Text style={styles.sobre}>
          Jogador dedicado, apaixonado por futebol e torcedor da Inter de Milão.
        </Text>

        <Text style={styles.time}>Inter de Milão</Text>

        <Image
          source={require("../../../assets/Inter.png")}
          style={styles.escudo}
        />
      </View>
    </SafeAreaView>
  );
}