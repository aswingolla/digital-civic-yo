import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Layers, MessageSquare } from 'lucide-react-native';

interface MapControlPanelProps {
  onToggleHeatmap: () => void;
  showHeatmap: boolean;
}

export function MapControlPanel({ onToggleHeatmap, showHeatmap }: MapControlPanelProps) {
  return (
    <View style={styles.container}>
      <Pressable 
        style={[
          styles.controlButton,
          showHeatmap && styles.activeButton
        ]}
        onPress={onToggleHeatmap}
      >
        <Layers size={20} color={showHeatmap ? '#3B82F6' : '#6B7280'} />
        <Text 
          style={[
            styles.buttonText,
            showHeatmap && styles.activeText
          ]}
        >
          Heatmap
        </Text>
      </Pressable>
      
      <Pressable style={styles.controlButton}>
        <MessageSquare size={20} color="#6B7280" />
        <Text style={styles.buttonText}>Comments</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeButton: {
    backgroundColor: '#EBF5FF',
  },
  buttonText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  activeText: {
    color: '#3B82F6',
  },
});