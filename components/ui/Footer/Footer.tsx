import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation";
import { Routes } from "../../../navigation/routes";

export const Footer = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.ObjectList.screenName);
        }}
        style={styles.button}
      >
        <Ionicons
          name="list-outline"
          size={28}
          style={styles.icon}
          color="#6B7280"
        />
        <Text style={styles.text}>目標リスト</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.CompletionList.screenName);
        }}
        style={styles.button}
      >
        <Ionicons
          name="ribbon-outline"
          size={28}
          style={styles.icon}
          color="#6B7280"
        />
        <Text style={styles.text}>達成リスト</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.Settings.screenName);
        }}
        style={styles.button}
      >
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
