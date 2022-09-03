import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const Routes = {
  ObjectListStackNavigation: {
    screen: "ObjectListStackNavigation",
    params: undefined,
  },
  ObjectList: {
    screenName: "ObjectList",
    params: undefined,
  },
  CreateObject: {
    screenName: "CreateObject",
    params: undefined,
  },
  CompletionList: {
    screenName: "CompletionList",
    params: undefined,
  },
  Settings: {
    screenName: "Settings",
    params: undefined,
  },
} as const;

type Params = {
  [Key in keyof typeof Routes]: typeof Routes[Key]["params"];
};

export type RootTabParamList = Pick<
  Params,
  "ObjectListStackNavigation" | "CompletionList" | "Settings"
>;

export type ObjectListStackParamList = Pick<
  Params,
  "ObjectList" | "CreateObject"
>;

export type ObjectListScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "ObjectListStackNavigation">,
  NativeStackNavigationProp<ObjectListStackParamList, "ObjectList">
>;
