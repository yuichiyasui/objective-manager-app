import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "~/constants/colors";

type Props = {
  type: "submit";
  label: string;
  onPress: () => void | Promise<void>;
};

const getStyle = (type: Props["type"]) => {
  switch (type) {
    case "submit":
      return styles.submit;
  }
};

export const Button = ({ type, label, onPress }: Props): JSX.Element => {
  const buttonStyle = getStyle(type);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.baseStyle, buttonStyle]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseStyle: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 6,
  },
  submit: {
    backgroundColor: colors.blue,
  },
  text: {
    color: colors.white,
    fontWeight: "700",
  },
});
