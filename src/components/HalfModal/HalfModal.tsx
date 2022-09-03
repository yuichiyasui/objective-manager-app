import { ReactNode } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Modal from "react-native-modal";

import { colors } from "~/constants/colors";

type Props = {
  title: string;
  isVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
};

export const HalfModal = ({
  title,
  isVisible,
  closeModal,
  children,
}: Props): JSX.Element => {
  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      onBackdropPress={closeModal}
      style={styles.modal}
    >
      <View style={styles.modalBody}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title}</Text>
        </View>
        <View style={styles.modalContent}>
          {children}
          <Button title="閉じる" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalBody: {
    backgroundColor: colors.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  modalHeader: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomColor: colors.gray300,
    borderBottomWidth: 1,
    padding: 12,
    backgroundColor: colors.gray100,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  modalContent: {
    padding: 16,
  },
});
