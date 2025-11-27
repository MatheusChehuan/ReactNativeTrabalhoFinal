import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    paddingHorizontal: 15,
  },
  titulo: {
    color: "#FFF",
    fontSize: 22,
    marginBottom: 15,
    marginTop: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    alignItems: "center",
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#2ecc71",
  },
  col: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    minWidth: 40,
  },
  logoTime: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
});