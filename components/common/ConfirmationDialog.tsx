import { StyleSheet, View, Text, Modal, Pressable, ViewStyle } from 'react-native';

interface ConfirmationDialogProps {
  visible: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonStyle?: ViewStyle;
}

export function ConfirmationDialog({
  visible,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  confirmButtonStyle,
}: ConfirmationDialogProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.dialogContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          
          <View style={styles.buttonsContainer}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
            >
              <Text style={styles.cancelButtonText}>{cancelText}</Text>
            </Pressable>
            
            <Pressable
              style={[styles.button, styles.confirmButton, confirmButtonStyle]}
              onPress={onConfirm}
            >
              <Text style={styles.confirmButtonText}>{confirmText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  dialogContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 8,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 8,
  },
  message: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 24,
    lineHeight: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 12,
  },
  cancelButton: {
    backgroundColor: '#F3F4F6',
  },
  confirmButton: {
    backgroundColor: '#3B82F6',
  },
  cancelButtonText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#4B5563',
  },
  confirmButtonText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: 'white',
  },
});