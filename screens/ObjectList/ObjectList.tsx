import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ObjectListScreen = (): JSX.Element => {
  return (
    <View style={styles.contentContainer}>
      <ScrollView alwaysBounceVertical={false} style={styles.main}>
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
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="add-circle" size={48} color="#6B7280" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  button: {
    position: "absolute",
    bottom: 12,
    right: 0,
  },
});
