import { NavigationContainer } from "@react-navigation/native";

import { BottomTabNavigation } from "./BottomTabNavigation";

export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};
