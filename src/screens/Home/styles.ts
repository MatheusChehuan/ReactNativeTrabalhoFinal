import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoTime: {
    width: 40,
    height: 40,
  },
  scrollView: {
    flex: 1,
  },
  tituloJogos: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFF",
    paddingHorizontal: 15,
    marginTop: 15,
  },
  semJogos: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  jogoItem: {
    backgroundColor: "#1C1C1C",
    marginHorizontal: 15,
    marginTop: 12,
    padding: 22,
    borderRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#2ecc71",
    minHeight: 100,
  },
  dataJogo: {
    fontSize: 13,
    color: "#AAA",
    marginBottom: 10,
  },
  infoJogo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  adversario: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
    flex: 1,
  },
  resultado: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "right",
  },
});
