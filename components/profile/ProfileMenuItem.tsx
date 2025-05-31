import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { ReactNode } from 'react';

interface ProfileMenuItemProps {
  icon: ReactNode;
  title: string;
  onPress?: () => void;
  showChevron?: boolean;
  rightElement?: ReactNode;
}

export function ProfileMenuItem({
  icon,
  title,
  onPress,
  showChevron = false,
  rightElement,
}: ProfileMenuItemProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.rightContainer}>
        {rightElement}
        
        {showChevron && (
          <ChevronRight size={20} color="#9CA3AF" />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  iconContainer: {
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#1F2937',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});