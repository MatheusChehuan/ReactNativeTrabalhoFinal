import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#111",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 30,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#1c1c1c",
    borderRadius: 12,
    marginBottom: 16,
    minHeight: 100,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 18,
    backgroundColor: "#333",
  },
  cardText: {
    flex: 1,
  },
  nome: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  time: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 6,
  },
});