import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ObjectListScreenNavigationProp, Routes } from "~/navigations/routes";
import { colors } from "~/constants/colors";
import { objectRepository, ObjectType } from "~/repositories/objects";
import { styles } from "./styles";

export const ObjectListScreen = (): JSX.Element => {
  const { navigate } = useNavigation<ObjectListScreenNavigationProp>();

  const [objects, setObjects] = useState<ObjectType[]>([]);

  useFocusEffect(() => {
    objectRepository.selectAll(setObjects);
  });

  return (
    <View style={styles.contentContainer}>
      <ScrollView alwaysBounceVertical={false} style={styles.main}>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.heading}>カテゴリー</Text>
            <TouchableOpacity>
              <Text>すべて</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.layoutSelectorContainer}>
            <TouchableOpacity>
              <Ionicons name="list-outline" size={28} color={colors.gray500} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.layoutGridButton}>
              <Ionicons name="grid-outline" size={28} color={colors.gray500} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.doingSection}>
          <Text style={styles.statusHeading}>進行中</Text>
        </View>

        <View>
          <Text style={styles.statusHeading}>未着手</Text>
        </View>
        <Text>
          {objects.length === 0 ? "目標がありません" : JSON.stringify(objects)}
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(Routes.CreateObject.screenName)}
      >
        <Ionicons name="add-circle" size={48} color={colors.gray500} />
      </TouchableOpacity>
    </View>
  );
};
