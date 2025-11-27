import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Raphael() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>


      <View style={styles.card}>
        <View style={styles.topo}>
          <Image source={require("../../../assets/Raphael.png")} style={styles.foto} />
          <Text style={styles.nome}>Raphael</Text>
        </View>

        <Text style={styles.sobre}>
          Jogador fiel ao Botafogo, trazendo dedicação e espírito esportivo ao grupo.
        </Text>

        <Text style={styles.time}>Botafogo</Text>

        <Image
          source={require("../../../assets/Botafogo.png")}
          style={styles.escudo}
        />
      </View>
    </SafeAreaView>
  );
}