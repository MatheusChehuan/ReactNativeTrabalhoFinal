import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: "contain",
  },

  areaInput: {
    width: "90%",
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#333",
  },

  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: "#EAEAEA",
    fontSize: 15,
  },

  submitButton: {
    width: "90%",
    backgroundColor: "#34b920",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  submitText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});