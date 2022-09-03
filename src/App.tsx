import { registerRootComponent } from "expo";
import { StatusBar, View, StyleSheet } from "react-native";

import { Navigation } from "~/navigations";
import { db, initializeDatabase } from "~/database";

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

registerRootComponent(App);
initializeDatabase(db);
