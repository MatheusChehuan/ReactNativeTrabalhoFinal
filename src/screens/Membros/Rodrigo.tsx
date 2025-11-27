import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rodrigo() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>

      <View style={styles.card}>
        <View style={styles.topo}>
          <Image source={require("../../../assets/Rodrigo.jpg")} style={styles.foto} />
          <Text style={styles.nome}>Rodrigo</Text>
        </View>

        <Text style={styles.sobre}>
          Jogador apaixonado pelo Flamengo, sempre presente e participativo no projeto.
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