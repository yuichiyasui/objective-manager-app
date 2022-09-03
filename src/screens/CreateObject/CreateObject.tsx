import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";

import { styles } from "./styles";
import { colors } from "~/constants/colors";
import { ObjectListScreenNavigationProp, Routes } from "~/navigations/routes";
import { AsyncAlert } from "~/utils/alert";
import { DateInput } from "~/components/DateInput";
import { HalfModal } from "~/components/HalfModal";
import { Button } from "~/components/Button";
import { objectRepository } from "~/repositories/objects";

export const CreateObjectScreen = (): JSX.Element => {
  const { navigate } = useNavigation<ObjectListScreenNavigationProp>();

  const [title, setTitle] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [deadlineDate, setDeadlineDate] = useState<Date>(new Date());
  const [isVisibleDeadlineDateModal, setIsVisibleDeadlineModal] =
    useState(false);

  const submit = async () => {
    objectRepository.insert({
      title,
      purpose,
      description: content,
      deadlineDate: dayjs(deadlineDate).format("YYYY-MM-DD"),
    });
    await AsyncAlert({ title: "作成しました" });
    navigate(Routes.ObjectList.screenName);
  };

  const screenDate = dayjs(deadlineDate).format("YYYY-MM-DD");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>目標名</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="目標名を入力"
            style={styles.input}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>目的</Text>
          <TextInput
            value={purpose}
            onChangeText={setPurpose}
            placeholder="目的を入力"
            style={styles.input}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>内容</Text>
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="内容を入力"
            multiline
            style={styles.inputTextArea}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>期日</Text>
          <TouchableOpacity
            onPress={() => setIsVisibleDeadlineModal(true)}
            style={styles.dateButton}
          >
            <Text style={styles.dateText}>{screenDate}</Text>
            <Ionicons
              name="calendar-outline"
              size={28}
              color={colors.gray500}
            />
          </TouchableOpacity>
        </View>

        <Button type="submit" label="作成" onPress={submit} />
      </ScrollView>

      <HalfModal
        title="期日を選択"
        closeModal={() => setIsVisibleDeadlineModal(false)}
        isVisible={isVisibleDeadlineDateModal}
      >
        <DateInput value={deadlineDate} onChange={setDeadlineDate} />
      </HalfModal>
    </View>
  );
};
