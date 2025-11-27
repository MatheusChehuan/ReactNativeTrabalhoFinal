import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { logosTimes } from "../../logosTimes";
import { styles } from "./styles";

export default function Tabela() {
  const [tabela, setTabela] = useState([]);
  const [loading, setLoading] = useState(true);

  async function carregarTabela() {
    try {
      const resp = await axios.get(
        "https://api.football-data.org/v4/competitions/BSA/standings",
        {
          headers: {
            "X-Auth-Token": "ff34e45f2b0b46e98add24ebc0aa1c89"
          }
        }
      );

      setTabela(resp.data.standings[0].table);
    } catch (e) {
      console.log("Erro ao carregar tabela:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarTabela();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#2ecc71" style={{ marginTop: 50 }} />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.col, { width: 30 }]}>{item.position}</Text>
      <Image source={logosTimes[item.team.id] ?? logosTimes.default} style={styles.logoTime} />
      <Text style={[styles.col, { flex: 1 }]}>{item.team.name}</Text>
      <Text style={styles.col}>{item.points}</Text>
      <Text style={styles.col}>{item.playedGames}</Text>
      <Text style={styles.col}>{item.won}</Text>
      <Text style={styles.col}>{item.lost}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Classificação - Brasileirão Série A</Text>

      <View style={[styles.row, styles.header]}>
        <Text style={[styles.col, { width: 30 }]}>#</Text>
        <Text style={[styles.col, { flex: 1 }]}>Time</Text>
        <Text style={styles.col}>PTS</Text>
        <Text style={styles.col}>J</Text>
        <Text style={styles.col}>V</Text>
        <Text style={styles.col}>D</Text>
      </View>

      <FlatList
        data={tabela}
        keyExtractor={(item) => item.team.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}