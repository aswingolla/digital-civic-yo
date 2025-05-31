import { StyleSheet, View, Text, Pressable } from 'react-native';

interface TimePeriodSelectorProps {
  selected: 'day' | 'week' | 'month';
  onChange: (period: 'day' | 'week' | 'month') => void;
}

export function TimePeriodSelector({ selected, onChange }: TimePeriodSelectorProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.periodButton, selected === 'day' && styles.selectedPeriod]}
        onPress={() => onChange('day')}
      >
        <Text 
          style={[
            styles.periodButtonText, 
            selected === 'day' && styles.selectedPeriodText
          ]}
        >
          Today
        </Text>
      </Pressable>
      
      <Pressable
        style={[styles.periodButton, selected === 'week' && styles.selectedPeriod]}
        onPress={() => onChange('week')}
      >
        <Text 
          style={[
            styles.periodButtonText, 
            selected === 'week' && styles.selectedPeriodText
          ]}
        >
          This Week
        </Text>
      </Pressable>
      
      <Pressable
        style={[styles.periodButton, selected === 'month' && styles.selectedPeriod]}
        onPress={() => onChange('month')}
      >
        <Text 
          style={[
            styles.periodButtonText, 
            selected === 'month' && styles.selectedPeriodText
          ]}
        >
          This Month
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  selectedPeriod: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  periodButtonText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  selectedPeriodText: {
    color: '#3B82F6',
  },
});