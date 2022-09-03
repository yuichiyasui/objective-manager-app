import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateObjectScreen } from "~/screens/CreateObject";
import { ObjectListScreen } from "~/screens/ObjectList";
import { ObjectListStackParamList, Routes } from "./routes";

const Stack = createNativeStackNavigator<ObjectListStackParamList>();

export const ObjectListStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={Routes.ObjectList.screenName}>
      <Stack.Screen
        name={Routes.ObjectList.screenName}
        component={ObjectListScreen}
        options={{
          title: "目標リスト",
        }}
      />
      <Stack.Screen
        name={Routes.CreateObject.screenName}
        component={CreateObjectScreen}
        options={{
          title: "目標の作成",
        }}
      />
    </Stack.Navigator>
  );
};
