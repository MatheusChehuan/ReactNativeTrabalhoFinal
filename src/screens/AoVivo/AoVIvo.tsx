import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Image,
  Pressable,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import footballApi from "../../services/footballApi";
import { logosTimes } from "../../logosTimes";

type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeID: number;
  awayID: number;
  homeScore: number | null;
  awayScore: number | null;
  status: string;
  date: Date;
  league: string;
  odds: { botao: string; odd: string }[];
};

export function AoVivo() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  const pulse = useState(new Animated.Value(1))[0];

  useEffect(() => {
    fetchAllMatches();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const generateOdd = () => (Math.random() * (5 - 1.4) + 1.4).toFixed(2);

  useEffect(() => {
    fetchAllMatches();
  }, []);

  async function fetchAllMatches() {
    setLoading(true);
    setError(null);

    try {
      const scheduled = await footballApi.get("matches?status=SCHEDULED");
      const live = await footballApi.get("matches?status=LIVE");

      const formatted = [...scheduled.data.matches, ...live.data.matches]
        .filter((item: any) => item.status !== "POSTPONED")
        .map((item: any) => ({
          id: item.id.toString(),
          homeTeam: item.homeTeam.shortName || item.homeTeam.name,
          awayTeam: item.awayTeam.shortName || item.awayTeam.name,
          homeID: item.homeTeam.id,
          awayID: item.awayTeam.id,
          homeScore: item.score.fullTime.home,
          awayScore: item.score.fullTime.away,
          status: item.status,
          date: new Date(item.utcDate),
          league: item.competition.name,
          odds: [
            { botao: "1", odd: generateOdd() },
            { botao: "X", odd: generateOdd() },
            { botao: "2", odd: generateOdd() },
          ],
        }));

      const sorted = formatted.sort(
        (a, b) => a.date.getTime() - b.date.getTime()
      );
      setMatches(sorted);
    } catch (e) {
      setError("Não foi possível carregar os jogos.");
    }

    setLoading(false);
  }

  const filtered = matches.filter(
    (m) =>
      m.homeTeam.toLowerCase().includes(search.toLowerCase()) ||
      m.awayTeam.toLowerCase().includes(search.toLowerCase())
  );

  const renderMatchCard = ({ item }: { item: Match }) => {
    const dia = item.date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });

    const hora = item.date.toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <View style={styles.matchCard}>
        <View style={styles.matchHeader}>
          <Text style={styles.competitionTitle}>{item.league}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <View style={styles.matchRow}>
              <View style={styles.teamInfo}>
                <Image
                  source={logosTimes[item.homeID] ?? logosTimes.default}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamName}>{item.homeTeam}</Text>
              </View>
              <Text style={styles.score}>{item.homeScore ?? "-"}</Text>
            </View>

            <View style={styles.matchRow}>
              <View style={styles.teamInfo}>
                <Image
                  source={logosTimes[item.awayID] ?? logosTimes.default}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamName}>{item.awayTeam}</Text>
              </View>
              <Text style={styles.score}>{item.awayScore ?? "-"}</Text>
            </View>
          </View>

          <View style={styles.matchStatus}>
            <Text style={styles.dateText}>{dia}</Text>
            <Text style={styles.timeText}>{hora}</Text>
          </View>
        </View>

        <View style={styles.oddsContainer}>
          {item.odds.map((o, i) => (
            <Pressable
              key={i}
              style={({ pressed }) => [
                styles.oddButton,
                pressed && styles.oddPressed,
              ]}
            >
              <Text style={styles.oddLabel}>{o.botao}</Text>
              <Text style={styles.oddValue}>{o.odd}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ao Vivo</Text>
          <Animated.View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#ff3b30",
              opacity: pulse,
            }}
          />
        </View>

        <TextInput
          placeholder="Buscar time..."
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />

        {loading ? (
          <ActivityIndicator
            size="large"
            color="red"
            style={{ marginTop: 50 }}
          />
        ) : error ? (
          <Text style={{ color: "#E74C3C" }}>{error}</Text>
        ) : (
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={renderMatchCard}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
