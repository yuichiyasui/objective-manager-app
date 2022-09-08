import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { ObjectListStackParamList } from "~/navigations/routes";

type Props = NativeStackScreenProps<ObjectListStackParamList, "ObjectDetail">;

export const ObjectDetailScreen = ({ route }: Props) => {
  const { objectId } = route.params;
  return (
    <View>
      <Text>{objectId}</Text>
    </View>
  );
};
