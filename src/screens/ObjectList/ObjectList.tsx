import { useState, useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ObjectListScreenNavigationProp } from "~/navigations/routes";
import { colors } from "~/constants/colors";
import { objectRepository, ObjectType } from "~/repositories/objects";
import { styles } from "./styles";
import { ListView } from "./parts/ListView";

export const ObjectListScreen = (): JSX.Element => {
  const { navigate } = useNavigation<ObjectListScreenNavigationProp>();

  const [displayType, setDisplayType] = useState<"list" | "gallery">("list");
  const [objects, setObjects] = useState<ObjectType[]>([]);

  const fetchObjects = useCallback(() => {
    objectRepository.selectAll(setObjects);
  }, []);

  useFocusEffect(fetchObjects);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.main}>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.heading}>カテゴリー</Text>
            <TouchableOpacity>
              <Text>すべて</Text>
            </TouchableOpacity>
          </View>
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

        <View style={styles.doingSection}>
          <Text style={styles.statusHeading}>進行中</Text>
        </View>

        <View>
          <Text style={styles.statusHeading}>未着手</Text>
          <ListView objects={objects} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("CreateObject")}
      >
        <Ionicons name="add-circle" size={48} color={colors.gray500} />
      </TouchableOpacity>
    </View>
  );
};
