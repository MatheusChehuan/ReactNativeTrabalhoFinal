import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { logosTimes } from "../../logosTimes";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

interface Match {
  id: number;
  utcDate: string;
  status: string;
  homeTeam: { id: number; name: string };
  awayTeam: { id: number; name: string };
  score: { fullTime: { home: number | null; away: number | null } };
}

export default function Home() {
  const { nome, idTime } = useContext(AuthContext);
  const [time, setTime] = useState<any>(null);
  const [jogos, setJogos] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregarTime() {
    try {
      const resp = await axios.get(
        `https://api.football-data.org/v4/teams/${idTime}`,
        { headers: { "X-Auth-Token": "ff34e45f2b0b46e98add24ebc0aa1c89" } }
      );
      setTime(resp.data);
    } catch (e) {
      console.log("ERRO TIME:", e);
    }
  }

  async function carregarJogos() {
    try {
      const resp = await axios.get(
        `https://api.football-data.org/v4/teams/${idTime}/matches?limit=20`,
        { headers: { "X-Auth-Token": "ff34e45f2b0b46e98add24ebc0aa1c89" } }
      );

      const jogosFinalizados = resp.data.matches
        .filter((match: Match) => match.status === "FINISHED")
        .sort(
          (a: Match, b: Match) =>
            new Date(b.utcDate).getTime() - new Date(a.utcDate).getTime()
        )
        .slice(0, 5);

      setJogos(jogosFinalizados);
    } catch (e) {
      console.log("ERRO JOGOS:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (idTime) {
      carregarTime();
      carregarJogos();
    }
  }, [idTime]);

  function formatarData(data: string) {
    const date = new Date(data);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  function obterNomeAdversario(match: Match) {
    if (match.homeTeam.id === idTime) {
      return match.awayTeam.name;
    }
    return match.homeTeam.name;
  }

  function obterResultado(match: Match) {
    const { home, away } = match.score.fullTime;
    if (home === null || away === null) return "-";

    if (match.homeTeam.id === idTime) {
      return `${home} x ${away}`;
    }
    return `${away} x ${home}`;
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#FFF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, {nome}</Text>
        <View style={styles.timeContainer}>
          <Image
            source={idTime !== null ? logosTimes[idTime] : logosTimes.default}
            style={styles.logoTime}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.tituloJogos}>Últimos 5 Jogos</Text>
        {jogos.length === 0 ? (
          <Text style={styles.semJogos}>Nenhum jogo encontrado</Text>
        ) : (
          jogos.map((jogo) => (
            <View key={jogo.id} style={styles.jogoItem}>
              <Text style={styles.dataJogo}>{formatarData(jogo.utcDate)}</Text>
              <View style={styles.infoJogo}>
                <Text style={styles.adversario}>
                  {obterNomeAdversario(jogo)}
                </Text>
                <Text style={styles.resultado}>{obterResultado(jogo)}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}