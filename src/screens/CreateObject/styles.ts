import { StyleSheet } from "react-native";
import { colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 16,
  },
  formControl: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    padding: 16,
    color: colors.black,
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    borderRadius: 6,
  },
  inputTextArea: {
    height: "auto",
    padding: 16,
    paddingTop: 16,
    color: colors.black,
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    borderRadius: 6,
  },
  dateButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    borderRadius: 6,
  },
  dateText: {
    fontSize: 14,
    marginRight: 20,
  },
});
