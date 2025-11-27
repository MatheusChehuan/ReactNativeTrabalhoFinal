import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Yuri() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.card}>
        <View style={styles.topo}>
          <Image
            source={require("../../../assets/Yuri.jpg")}
            style={styles.foto}
          />
          <Text style={styles.nome}>Yuri</Text>
        </View>

        <Text style={styles.sobre}>
          Apaixonado por futebol e torcedor fiel do Flamengo.{"\n"}
          Participa ativamente do projeto trazendo energia e dedicação.
        </Text>

        <Text style={styles.time}>CR Flamengo</Text>

        <Image
          source={require("../../../assets/Flamengo.png")}
          style={styles.escudo}
        />
      </View>
    </SafeAreaView>
  );
}
