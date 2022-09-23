import { useState, useCallback, Dispatch, SetStateAction } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ObjectListScreenNavigationProp } from "~/navigations/routes";
import { colors } from "~/constants/colors";
import { objectRepository, ObjectType } from "~/repositories/objects";
import { styles } from "./styles";
import { ListViewItem } from "./parts/ListViewItem";
import { GalleryViewItem } from "./parts/GalleryViewItem";

type DisplayType = "list" | "gallery";

const ListHeader = ({
  displayType,
  setDisplayType,
}: {
  displayType: DisplayType;
  setDisplayType: Dispatch<SetStateAction<DisplayType>>;
}) => {
  return (
    <View style={styles.headingContainer}>
      <View style={styles.layoutSelectorContainer}>
        <TouchableOpacity
          onPress={() => setDisplayType("list")}
          disabled={displayType === "list"}
        >
          <Ionicons
            name="list-outline"
            size={28}
            color={displayType === "list" ? colors.blue : colors.gray500}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDisplayType("gallery")}
          disabled={displayType === "gallery"}
          style={styles.layoutGridButton}
        >
          <Ionicons
            name="grid-outline"
            size={28}
            color={displayType === "gallery" ? colors.blue : colors.gray500}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ObjectListScreen = (): JSX.Element => {
  const { navigate } = useNavigation<ObjectListScreenNavigationProp>();

  const [displayType, setDisplayType] = useState<DisplayType>("list");
  const [objects, setObjects] = useState<ObjectType[]>([]);

  const fetchObjects = useCallback(() => {
    objectRepository.selectAll(setObjects);
  }, []);

  useFocusEffect(fetchObjects);

  return (
    <View style={styles.contentContainer}>
      <FlatList
        key={displayType === "gallery" ? "gallery" : "list"}
        alwaysBounceVertical={false}
        ListHeaderComponent={
          <ListHeader
            displayType={displayType}
            setDisplayType={setDisplayType}
          />
        }
        data={objects}
        keyExtractor={(item) => item.id.toString()}
        numColumns={displayType === "gallery" ? 3 : undefined}
        renderItem={({ item, index }) =>
          displayType === "gallery" ? (
            <GalleryViewItem {...item} />
          ) : (
            <ListViewItem
              object={item}
              isFirst={index === 0}
              isLast={index === objects.length - 1}
            />
          )
        }
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigate("CreateObject")}
      >
        <Ionicons
          name="add-outline"
          size={36}
          color={colors.white}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
