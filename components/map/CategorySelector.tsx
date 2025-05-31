import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react';

interface CategorySelectorProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategorySelector({ selectedCategory, onSelectCategory }: CategorySelectorProps) {
  const [expanded, setExpanded] = useState(false);
  
  const categories = [
    { id: null, label: 'All' },
    { id: 'school', label: 'Schools' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'property', label: 'Properties' },
    { id: 'business', label: 'Businesses' },
    { id: 'government', label: 'Government' },
    { id: 'event', label: 'Events' },
    { id: 'investment', label: 'Investments' },
    { id: 'developer', label: 'Developers' },
  ];
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const handleSelectCategory = (categoryId: string | null) => {
    onSelectCategory(categoryId);
    setExpanded(false);
  };
  
  const selectedCategoryLabel = categories.find(c => c.id === selectedCategory)?.label || 'All';
  
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.selectedCategory}
        onPress={toggleExpanded}
      >
        <Text style={styles.selectedCategoryText}>{selectedCategoryLabel}</Text>
        <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
      </Pressable>
      
      {expanded && (
        <View style={styles.dropdownContainer}>
          {categories.map((category) => (
            <Pressable
              key={category.id || 'all'}
              style={[
                styles.categoryItem,
                category.id === selectedCategory && styles.activeCategory,
              ]}
              onPress={() => handleSelectCategory(category.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category.id === selectedCategory && styles.activeCategoryText,
                ]}
              >
                {category.label}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10,
  },
  selectedCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedCategoryText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
    color: '#1F2937',
  },
  expandIcon: {
    fontSize: 12,
    color: '#6B7280',
  },
  dropdownContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  activeCategory: {
    backgroundColor: '#F3F4F6',
  },
  categoryText: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#1F2937',
  },
  activeCategoryText: {
    fontFamily: 'SF-Pro-Text-Medium',
    color: '#3B82F6',
  },
});