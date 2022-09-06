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

const ListItem = ({
  object,
  isLast,
}: {
  object: Props["objects"][number];
  isLast: boolean;
}) => {
  const { navigate } = useNavigation<ObjectListScreenNavigationProp>();

  return (
    <View style={isLast ? undefined : styles.item}>
      <TouchableOpacity
        onPress={() => navigate("ObjectDetail", { objectId: object.id })}
        style={styles.itemButton}
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

export const ListView = ({ objects }: Props) => {
  return (
    <View style={styles.list}>
      {objects.map((object, index) => (
        <ListItem
          key={object.id}
          object={object}
          isLast={index === objects.length - 1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  item: {
    borderBottomColor: colors.gray300,
    borderBottomWidth: 1,
  },
  itemButton: {
    padding: 16,
  },
  itemTitle: {
    fontSize: 14,
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
