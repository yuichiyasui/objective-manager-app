import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateObjectScreen } from "~/screens/CreateObject";
import { ObjectDetailScreen } from "~/screens/ObjectDetail";
import { ObjectListScreen } from "~/screens/ObjectList";
import { ObjectListStackParamList } from "./routes";

const Stack = createNativeStackNavigator<ObjectListStackParamList>();

export const ObjectListStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={"ObjectList"}>
      <Stack.Screen
        name={"ObjectList"}
        component={ObjectListScreen}
        options={{
          title: "目標リスト",
        }}
      />
      <Stack.Screen
        name={"ObjectDetail"}
        component={ObjectDetailScreen}
        options={{ title: "目標の詳細" }}
      />
      <Stack.Screen
        name={"CreateObject"}
        component={CreateObjectScreen}
        options={{
          title: "目標の作成",
        }}
      />
    </Stack.Navigator>
  );
};
