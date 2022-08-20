import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { Footer } from "../ui/Footer";

type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>{children}</View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    justifyContent: "flex-end",
  },
});
