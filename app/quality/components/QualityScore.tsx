import { StyleSheet, View, Text } from 'react-native';
import { Star, AlertTriangle, CheckCircle } from 'lucide-react-native';

interface QualityScoreProps {
  score: number;
  type: 'business' | 'organization';
}

export function QualityScore({ score, type }: QualityScoreProps) {
  const getScoreColor = () => {
    if (score >= 80) return '#10B981';
    if (score >= 60) return '#F59E0B';
    return '#EF4444';
  };

  const getScoreIcon = () => {
    if (score >= 80) return <CheckCircle size={24} color="#10B981" />;
    if (score >= 60) return <Star size={24} color="#F59E0B" />;
    return <AlertTriangle size={24} color="#EF4444" />;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.scoreContainer, { backgroundColor: `${getScoreColor()}15` }]}>
        {getScoreIcon()}
        <Text style={[styles.score, { color: getScoreColor() }]}>{score}</Text>
      </View>
      <Text style={styles.label}>Quality Score</Text>
      <Text style={styles.description}>
        Based on community feedback and verification status
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  score: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 24,
    marginLeft: 12,
  },
  label: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  description: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
});