import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { PulseReportType } from '@/types';
import { PulseChart } from './PulseChart';

interface PulseReportCardProps {
  report: PulseReportType;
}

export function PulseReportCard({ report }: PulseReportCardProps) {
  // Find the highest score to calculate relative bar widths
  const maxScore = Math.max(...report.items.map(item => item.score));

  return (
    <Pressable style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{report.title}</Text>
        <Text style={styles.period}>{report.period}</Text>
      </View>
      
      <View style={styles.contentContainer}>
        <PulseChart items={report.items} maxScore={maxScore} />
      </View>
      
      <Pressable style={styles.footer}>
        <Text style={styles.viewAllText}>View full report</Text>
        <ChevronRight size={16} color="#3B82F6" />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#1F2937',
  },
  period: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  contentContainer: {
    paddingVertical: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#3B82F6',
    marginRight: 4,
  },
});