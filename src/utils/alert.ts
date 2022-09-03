import { Alert as NativeAlert } from "react-native";

export const AsyncAlert = ({
  title,
  message,
}: {
  title: string;
  message?: string;
}) =>
  new Promise((resolve) => {
    NativeAlert.alert(
      title,
      message,
      [
        {
          text: "OK",
          onPress: () => {
            resolve("YES");
          },
        },
      ],
      { cancelable: false }
    );
  });
