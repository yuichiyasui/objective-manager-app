import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ObjectListScreenNavigationProp } from "~/navigations/routes";
import { colors } from "~/constants/colors";

type Props = {
  objects: {
    id: number;
    title: string;
    imageUrl: string | null;
  }[];
};

const ListItem = ({ id, imageUrl, title }: Props["objects"][number]) => {
  const { navigate } = useNavigation<ObjectListScreenNavigationProp>();

  return (
    <TouchableOpacity
      key={id}
      onPress={() => navigate("ObjectDetail", { objectId: id })}
      style={styles.item}
    >
      {!imageUrl ? (
        <View style={styles.itemNoImage}>
          <Text style={styles.itemNoImageTitle}>{title}</Text>
        </View>
      ) : (
        <Image source={{ uri: imageUrl }} style={styles.itemImage} />
      )}
    </TouchableOpacity>
  );
};

export const GalleryView = ({ objects }: Props) => {
  return (
    <FlatList
      data={objects}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      renderItem={({ item }) => <ListItem {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1 / 3,
    margin: 1,
    aspectRatio: 1,
  },
  itemImage: {
    height: "100%",
    resizeMode: "cover",
  },
  itemNoImage: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray500,
  },
  itemNoImageTitle: {
    color: colors.white,
    fontWeight: "700",
  },
});
