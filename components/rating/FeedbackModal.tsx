import { useState } from 'react';
import { StyleSheet, View, Text, Modal, Pressable, TextInput, Platform } from 'react-native';
import { X } from 'lucide-react-native';

interface FeedbackModalProps {
  visible: boolean;
  onSubmit: (feedback: string) => void;
  onClose: () => void;
  itemName: string;
}

export function FeedbackModal({ visible, onSubmit, onClose, itemName }: FeedbackModalProps) {
  const [feedback, setFeedback] = useState('');
  
  const handleSubmit = () => {
    onSubmit(feedback);
    setFeedback('');
  };
  
  const handleClose = () => {
    onClose();
    setFeedback('');
  };
  
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Tell us why</Text>
            <Pressable style={styles.closeButton} onPress={handleClose}>
              <X size={24} color="#6B7280" />
            </Pressable>
          </View>
          
          <Text style={styles.modalSubtitle}>
            Your feedback about <Text style={styles.itemName}>{itemName}</Text> helps improve the community.
          </Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.feedbackInput}
              value={feedback}
              onChangeText={setFeedback}
              placeholder="What didn't you like about it? (optional)"
              multiline
              maxLength={250}
              autoFocus
            />
            <Text style={styles.charCount}>
              {feedback.length}/250
            </Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.skipButton}
              onPress={() => onSubmit('')}
            >
              <Text style={styles.skipButtonText}>Skip</Text>
            </Pressable>
            
            <Pressable
              style={[styles.submitButton, !feedback && styles.submitButtonDisabled]}
              onPress={handleSubmit}
              disabled={!feedback}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 20,
    color: '#1F2937',
  },
  closeButton: {
    padding: 4,
  },
  modalSubtitle: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 24,
    lineHeight: 24,
  },
  itemName: {
    fontFamily: 'SF-Pro-Text-Medium',
  },
  inputContainer: {
    marginBottom: 24,
  },
  feedbackInput: {
    height: 120,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#1F2937',
    textAlignVertical: 'top',
  },
  charCount: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'right',
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#BFDBFE',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
  },
  skipButton: {
    flex: 1,
    marginRight: 12,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  skipButtonText: {
    color: '#4B5563',
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
  },
});