import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CompletionListScreen } from "../screens/CompletionList";
import { ObjectListScreen } from "../screens/ObjectList";
import { SettingsScreen } from "../screens/Settings";
import { Routes } from "./routes";

export type RootStackParamList = {
  ObjectList: undefined;
  CompletionList: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ObjectList">
        <Stack.Screen
          name={Routes.ObjectList.screenName}
          options={{ title: "目標リスト" }}
          component={ObjectListScreen}
        />
        <Stack.Screen
          name={Routes.CompletionList.screenName}
          options={{ title: "達成リスト" }}
          component={CompletionListScreen}
        />
        <Stack.Screen
          name={Routes.Settings.screenName}
          options={{ title: "設定" }}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
