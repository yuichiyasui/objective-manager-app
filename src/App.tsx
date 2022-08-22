import { registerRootComponent } from "expo";
import { StatusBar, View, StyleSheet } from "react-native";

import { Navigation } from "~/navigations";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </View>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
