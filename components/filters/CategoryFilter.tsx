import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { School, Coffee, Home, Building, Government, Calendar, Wallet, Building2 } from 'lucide-react-native';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories = [
    { id: 'school', label: 'Schools', icon: School },
    { id: 'restaurant', label: 'Food', icon: Coffee },
    { id: 'property', label: 'Properties', icon: Home },
    { id: 'business', label: 'Businesses', icon: Building },
    { id: 'government', label: 'Government', icon: Government },
    { id: 'event', label: 'Events', icon: Calendar },
    { id: 'investment', label: 'Investments', icon: Wallet },
    { id: 'developer', label: 'Developers', icon: Building2 },
  ];
  
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Pressable
          style={[
            styles.categoryItem,
            selectedCategory === null && styles.selectedCategory,
          ]}
          onPress={() => onSelectCategory(null)}
        >
          <Text
            style={[
              styles.categoryLabel,
              selectedCategory === null && styles.selectedCategoryLabel,
            ]}
          >
            All
          </Text>
        </Pressable>
        
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={[
              styles.categoryItem,
              selectedCategory === category.id && styles.selectedCategory,
            ]}
            onPress={() => onSelectCategory(category.id)}
          >
            <category.icon
              size={18}
              color={selectedCategory === category.id ? '#FFFFFF' : '#4B5563'}
            />
            <Text
              style={[
                styles.categoryLabel,
                selectedCategory === category.id && styles.selectedCategoryLabel,
              ]}
            >
              {category.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  selectedCategory: {
    backgroundColor: '#3B82F6',
  },
  categoryLabel: {
    marginLeft: 8,
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#4B5563',
  },
  selectedCategoryLabel: {
    color: '#FFFFFF',
  },
});