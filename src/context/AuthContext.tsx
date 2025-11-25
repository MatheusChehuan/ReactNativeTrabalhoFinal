import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
  token: string | null;
  nome: string | null;
  idTime: number | null;
  setLoginData: (token: string, nome: string, idTime: number) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  token: null,
  nome: null,
  idTime: null,
  setLoginData: () => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState<string | null>(null);
  const [nome, setNome] = useState<string | null>(null);
  const [idTime, setIdTime] = useState<number | null>(null);

  async function setLoginData(token: string, nome: string, idTime: number) {
    setToken(token);
    setNome(nome);
    setIdTime(idTime);

    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("nome", nome);
    await AsyncStorage.setItem("idTime", idTime.toString());
  }

  function logout() {
    setToken(null);
    setNome(null);
    setIdTime(null);
    AsyncStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ token, nome, idTime, setLoginData, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
