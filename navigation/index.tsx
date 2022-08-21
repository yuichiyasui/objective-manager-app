import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { CompletionListScreen } from "../screens/CompletionList";
import { ObjectListScreen } from "../screens/ObjectList";
import { SettingsScreen } from "../screens/Settings";
import { Routes } from "./routes";

export type RootTabParamList = {
  ObjectList: undefined;
  CompletionList: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const ObjectListIcon = ({ size, color }: IconProps): JSX.Element => (
  <Ionicons name="list-outline" size={size} color={color} />
);
const CompletionListIcon = ({ size, color }: IconProps): JSX.Element => (
  <Ionicons name="ribbon-outline" size={size} color={color} />
);
const SettingsIcon = ({ size, color }: IconProps): JSX.Element => (
  <Ionicons name="settings-outline" size={size} color={color} />
);

export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="ObjectList">
        <Tab.Screen
          name={Routes.ObjectList.screenName}
          options={{
            title: "目標リスト",
            tabBarLabel: "目標リスト",
            tabBarIcon: ObjectListIcon,
          }}
          component={ObjectListScreen}
        />
        <Tab.Screen
          name={Routes.CompletionList.screenName}
          options={{
            title: "達成リスト",
            tabBarLabel: "達成リスト",
            tabBarIcon: CompletionListIcon,
          }}
          component={CompletionListScreen}
        />
        <Tab.Screen
          name={Routes.Settings.screenName}
          options={{
            title: "設定",
            tabBarLabel: "設定",
            tabBarIcon: SettingsIcon,
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
