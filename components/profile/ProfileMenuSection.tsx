import { StyleSheet, View, Text } from 'react-native';
import { ReactNode } from 'react';

interface ProfileMenuSectionProps {
  title: string;
  children: ReactNode;
}

export function ProfileMenuSection({ title, children }: ProfileMenuSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
});