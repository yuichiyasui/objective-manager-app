import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { ObjectListStackParamList } from "~/navigations/routes";

type Props = NativeStackScreenProps<ObjectListStackParamList, "ObjectDetail">;

export const ObjectDetailScreen = ({ route }: Props) => {
  const { objectId } = route.params;

  const getObjectDetail = useCallback(() => {
    // TODO: selectById
  }, []);

  useFocusEffect(getObjectDetail);

  return (
    <ScrollView>
      <View>
        <Text>{objectId}</Text>
      </View>
    </ScrollView>
  );
};
