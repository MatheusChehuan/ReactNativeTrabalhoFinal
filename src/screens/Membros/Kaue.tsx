import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Kaue() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>

      <View style={styles.card}>
        <View style={styles.topo}>
          <Image source={require("../../../assets/Kaue.jpg")} style={styles.foto} />
          <Text style={styles.nome}>Kauê</Text>
        </View>

        <Text style={styles.sobre}>
          Jogador entusiasta, sempre envolvido com o Flamengo e trazendo energia ao time.
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