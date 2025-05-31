import { StyleSheet, View, Text } from 'react-native';

interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const getBadgeColor = () => {
    switch (category.toLowerCase()) {
      case 'school':
      case 'education':
        return { bg: '#DBEAFE', text: '#2563EB' }; // Blue
      case 'restaurant':
      case 'cafe':
        return { bg: '#FEF3C7', text: '#D97706' }; // Amber
      case 'business':
        return { bg: '#E0F2FE', text: '#0284C7' }; // Sky
      case 'property':
      case 'real estate':
        return { bg: '#F3F4F6', text: '#4B5563' }; // Gray
      case 'event':
        return { bg: '#FCE7F3', text: '#DB2777' }; // Pink
      case 'government':
        return { bg: '#ECFCCB', text: '#65A30D' }; // Lime
      case 'investment':
        return { bg: '#E9D5FF', text: '#7E22CE' }; // Purple
      default:
        return { bg: '#E5E7EB', text: '#374151' }; // Default Gray
    }
  };
  
  const { bg, text } = getBadgeColor();
  
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.badgeText, { color: text }]}>
        {category}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 12,
    textTransform: 'capitalize',
  },
});