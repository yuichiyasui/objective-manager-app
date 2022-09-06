import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    position: "relative",
    marginHorizontal: 12,
  },
  main: {
    flex: 1,
    paddingVertical: 16,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 24,
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
  doingSection: {
    marginBottom: 28,
  },
  statusHeading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  button: {
    position: "absolute",
    bottom: 12,
    right: 0,
  },
});
