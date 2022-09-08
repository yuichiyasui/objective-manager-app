import { StyleSheet } from "react-native";
import { colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    position: "relative",
    marginHorizontal: 12,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
    paddingTop: 16,
  },
  heading: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 8,
  },
  layoutSelectorContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  },
  layoutGridButton: {
    marginLeft: 16,
  },
  columnWrapper: {
    backgroundColor: colors.white,
  },
  button: {
    position: "absolute",
    bottom: 12,
    right: 0,
    borderRadius: 100,
    backgroundColor: colors.blue,
    justifyContent: "center",
    width: 48,
    height: 48,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonIcon: {
    textAlign: "center",
    alignSelf: "center",
    paddingLeft: 2,
  },
});
