import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  imageLogo: {
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
    borderColor: "#2A2A2A",
  },

  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: "#EAEAEA",
    fontSize: 15,
  },

  pickerLabel: {
    width: "90%",
    color: "#EAEAEA",
    fontSize: 14,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: "500",
  },

  picker: {
    width: "90%",
    backgroundColor: "#1E1E1E",
    color: "#EAEAEA",
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },

  submitButton: {
    width: "90%",
    backgroundColor: "#34B920",
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

  secondaryButton: {
    width: "90%",
    backgroundColor: "#2E2E2E",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#444",
  },

  secondaryText: {
    color: "#EAEAEA",
    fontSize: 16,
    fontWeight: "bold",
  },
});