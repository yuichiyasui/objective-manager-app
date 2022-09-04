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
  imagePicker: {
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    borderRadius: 6,
    width: "80%",
    height: 200,
    padding: 24,
    position: "relative",
  },
  imagePickerButton: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePickerIcon: {
    marginBottom: 10,
  },
  imagePickerText: {
    color: colors.gray500,
  },
  thumnail: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imagePickerRemoveButton: {
    position: "absolute",
    alignSelf: "flex-start",
    top: 4,
    right: 4,
    zIndex: 1,
  },
});
