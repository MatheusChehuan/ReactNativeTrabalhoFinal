import { View, Text, Image, ActivityIndicator, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { logosTimes } from "../../logosTimes";

export default function Home() {
  const { nome, idTime, logout } = useContext(AuthContext);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);

  
  async function carregarTime() {
    try {
      const resp = await axios.get(
        `https://api.football-data.org/v4/teams/${idTime}`,
        {headers: {"X-Auth-Token": "ff34e45f2b0b46e98add24ebc0aa1c89",},
        }
      );

      setTime(resp.data);
    } catch (e) {
      console.log("ERRO TIME:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarTime();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#000" />;

  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Olá, {nome}!</Text>

      <Image source={logosTimes[idTime] ?? logosTimes.default} style={{ width: 80, height: 80, marginVertical: 20 }}/>

      <Text style={{ fontSize: 20 }}>{time?.name}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Logout" color="red" onPress={logout} />
      </View>
    </View>
  );
}
