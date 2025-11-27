import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: 16,
    padding: 32,
    width: "100%",
    minHeight: 500,
    justifyContent: "flex-start",
    borderColor: "#2ecc71",
    borderWidth: 1,
    elevation: 4,
  },
  topo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#333",
    marginRight: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    flexShrink: 1,
  },
  sobre: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "left",
    lineHeight: 22,
    marginBottom: 24,
  },
  time: {
    fontSize: 20,
    color: "#aaa",
    marginBottom: 16,
    textAlign: "left",
  },
  escudo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginTop: 20,
  },
});
