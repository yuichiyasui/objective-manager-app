import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { colors } from "~/constants/colors";
import { ObjectListScreenNavigationProp } from "~/navigations/routes";

type Props = {
  objects: {
    id: number;
    title: string;
    deadlineDate: string;
  }[];
};

export const ListViewItem = ({
  object,
  isFirst,
  isLast,
}: {
  object: Props["objects"][number];
  isFirst: boolean;
  isLast: boolean;
}) => {
  const { navigate } = useNavigation<ObjectListScreenNavigationProp>();
  const itemStyle = [
    styles.item,
    isFirst ? styles.firstItem : undefined,
    isLast ? styles.lastItem : undefined,
  ];
  const itemButtonStyle = [
    styles.itemButton,
    isLast ? styles.lastItemButton : undefined,
  ];

  return (
    <View style={itemStyle}>
      <TouchableOpacity
        onPress={() => navigate("ObjectDetail", { objectId: object.id })}
        style={itemButtonStyle}
      >
        <Text style={styles.itemTitle}>{object.title}</Text>
        <View style={styles.itemDeadlineDate}>
          <Text style={styles.itemDeadlineDateHeading}>期日</Text>
          <Text style={styles.itemDeadlineDateText}>{object.deadlineDate}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  firstItem: {
    paddingTop: 4,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  lastItem: {
    paddingBottom: 4,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomWidth: 0,
  },
  itemButton: {
    padding: 16,
    borderBottomColor: colors.gray300,
    borderBottomWidth: 1,
  },
  lastItemButton: {
    borderBottomWidth: 0,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  itemDeadlineDate: {
    flexDirection: "row",
  },
  itemDeadlineDateHeading: {
    marginRight: 6,
    color: colors.gray500,
  },
  itemDeadlineDateText: {
    color: colors.gray500,
  },
});
