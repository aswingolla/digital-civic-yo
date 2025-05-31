import { StyleSheet, View, Text } from 'react-native';
import * as Icons from 'lucide-react-native';
import { LucideIcon } from 'lucide-react-native';

interface EmptyStateProps {
  title: string;
  message: string;
  icon: keyof typeof Icons;
}

export function EmptyState({ title, message, icon }: EmptyStateProps) {
  const Icon = Icons[icon as keyof typeof Icons] as LucideIcon;
  
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon size={48} color="#9CA3AF" />
      </View>
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
});