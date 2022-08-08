import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Footer = (): JSX.Element => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Ionicons
          name="list-outline"
          size={28}
          style={styles.icon}
          color="#6B7280"
        />
        <Text style={styles.text}>目標リスト</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons
          name="ribbon-outline"
          size={28}
          style={styles.icon}
          color="#6B7280"
        />
        <Text style={styles.text}>達成リスト</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons
          name="settings-outline"
          size={28}
          style={styles.icon}
          color="#6B7280"
        />
        <Text style={styles.text}>設定</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#D1D5DB",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  button: {
    minWidth: 50,
  },
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 4,
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    color: "#6B7280",
  },
});
