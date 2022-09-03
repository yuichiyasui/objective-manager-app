import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CompletionListScreen } from "~/screens/CompletionList";
import { SettingsScreen } from "~/screens/Settings";
import { ObjectListStackNavigation } from "./ObjectListStackNavigation";
import { RootTabParamList, Routes } from "./routes";

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab =
  createBottomTabNavigator<
    Pick<
      RootTabParamList,
      "ObjectListStackNavigation" | "CompletionList" | "Settings"
    >
  >();

const ObjectListIcon = ({ size, color }: IconProps): JSX.Element => (
  <Ionicons name="list-outline" size={size} color={color} />
);
const CompletionListIcon = ({ size, color }: IconProps): JSX.Element => (
  <Ionicons name="ribbon-outline" size={size} color={color} />
);
const SettingsIcon = ({ size, color }: IconProps): JSX.Element => (
  <Ionicons name="settings-outline" size={size} color={color} />
);

export const BottomTabNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName="ObjectListStackNavigation">
      <Tab.Screen
        name={Routes.ObjectListStackNavigation.screen}
        options={{
          tabBarLabel: "目標リスト",
          tabBarIcon: ObjectListIcon,
          headerShown: false,
        }}
        component={ObjectListStackNavigation}
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
  );
};
