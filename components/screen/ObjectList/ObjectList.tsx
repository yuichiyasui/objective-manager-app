import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ObjectListScreen = (): JSX.Element => {
  return (
    <>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading}>カテゴリー</Text>
          <TouchableOpacity>
            <Text>すべて</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layoutSelectorContainer}>
          <TouchableOpacity>
            <Ionicons name="list-outline" size={28} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.layoutGridButton}>
            <Ionicons name="grid-outline" size={28} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.doingSection}>
        <Text style={styles.statusHeading}>進行中</Text>
      </View>

      <View>
        <Text style={styles.statusHeading}>未着手</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
  },
});
