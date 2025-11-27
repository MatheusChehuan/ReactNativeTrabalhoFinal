import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

type Membro = {
  id: string;
  nome: string;
  foto: any;
  time: string;
  pagina: string;
  escudo: any;
};

const equipe: Membro[] = [
  {
    id: "1",
    nome: "Yuri",
    foto: require("../../../assets/Yuri.jpg"),
    time: "CR Flamengo",
    pagina: "Yuri",
    escudo: require("../../../assets/Flamengo.png"),
  },
  {
    id: "2",
    nome: "Matheus",
    foto: require("../../../assets/Matheus.jpg"),
    time: "Inter de Milão",
    pagina: "Matheus",
    escudo: require("../../../assets/Inter.png"),
  },
  {
    id: "3",
    nome: "Kauê",
    foto: require("../../../assets/Kaue.jpg"),
    time: "Flamengo",
    pagina: "Kaue",
    escudo: require("../../../assets/Flamengo.png"),
  },
  {
    id: "4",
    nome: "Rodrigo",
    foto: require("../../../assets/Rodrigo.jpg"),
    time: "O melhor do Rio!!",
    pagina: "Rodrigo",
    escudo: require("../../../assets/Vasco.png"),
  },
  {
    id: "5",
    nome: "Raphael",
    foto: require("../../../assets/Raphael.png"),
    time: "Botafogo",
    pagina: "Raphael",
    escudo: require("../../../assets/Botafogo.png"),
  },
];

export default function Sobre() {
  const navigation = useNavigation();

  const abrirPagina = (pagina: string) => {
    navigation.navigate(pagina as never);
  };

  const renderItem: ListRenderItem<Membro> = ({ item }) => (
    <TouchableOpacity onPress={() => abrirPagina(item.pagina)}>
      <View style={styles.card}>
        <Image source={item.foto} style={styles.foto} />
        <View style={styles.cardText}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Image
          source={item.escudo}
          style={{
            width: 40,
            height: 40,
            marginLeft: "auto",
            marginRight: 10,
            borderRadius: 6,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.titulo}>Sobre</Text>
      <FlatList
        data={equipe}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}