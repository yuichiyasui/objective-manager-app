import { Dispatch } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  value: Date;
  onChange: Dispatch<React.SetStateAction<Date>>;
};

export const DateInput = ({ value, onChange }: Props): JSX.Element => {
  return (
    <DateTimePicker
      display="inline"
      mode="date"
      themeVariant="light"
      locale="ja"
      value={value}
      onChange={(_event, date) => {
        if (!date) return;
        onChange(date);
      }}
    />
  );
};
