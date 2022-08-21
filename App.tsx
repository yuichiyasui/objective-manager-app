import { StatusBar, View, StyleSheet } from "react-native";

import { Navigation } from "./navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
