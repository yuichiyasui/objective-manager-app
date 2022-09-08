import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Routes = {
  ObjectListStackNavigation: {
    screen: "ObjectListStackNavigation";
    params: undefined;
  };
  ObjectList: {
    screenName: "ObjectList";
    params: undefined;
  };
  ObjectDetail: {
    screenName: "ObjectDetail";
    params: {
      objectId: number;
    };
  };
  CreateObject: {
    screenName: "CreateObject";
    params: undefined;
  };
  CompletionList: {
    screenName: "CompletionList";
    params: undefined;
  };
  Settings: {
    screenName: "Settings";
    params: undefined;
  };
};

type Params = {
  [Key in keyof Routes]: Routes[Key]["params"];
};

export type RootTabParamList = Pick<
  Params,
  "ObjectListStackNavigation" | "CompletionList" | "Settings"
>;

export type ObjectListStackParamList = Pick<
  Params,
  "ObjectList" | "ObjectDetail" | "CreateObject"
>;

export type ObjectListScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "ObjectListStackNavigation">,
  NativeStackNavigationProp<ObjectListStackParamList, "ObjectList">
>;
