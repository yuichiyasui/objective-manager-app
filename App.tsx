import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Footer } from "./components/ui/Footer";
import { ObjectListScreen } from "./components/screen/ObjectList";

export default function App() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>objective manager</Text>
      </View>

      <ScrollView>
        <ObjectListScreen />
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="add-circle" size={48} color="#6B7280" />
      </TouchableOpacity>

      <View style={styles.footer}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    marginRight: 12,
    marginLeft: "auto",
    marginBottom: 12,
  },
  footer: {
    justifyContent: "flex-end",
  },
});
