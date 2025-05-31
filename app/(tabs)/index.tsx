import { useCallback, useRef, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useFocusEffect } from '@react-navigation/native';

import { RatingCard } from '@/components/rating/RatingCard';
import { useLocation } from '@/hooks/useLocation';
import { CategoryFilter } from '@/components/filters/CategoryFilter';
import { fetchNearbyItems } from '@/utils/dataService';
import { ItemType } from '@/types';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { location, locationError } = useLocation();
  
  const fetchItems = useCallback(async () => {
    if (location) {
      setLoading(true);
      try {
        const fetchedItems = await fetchNearbyItems(location, selectedCategory);
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    }
  }, [location, selectedCategory]);
  
  useFocusEffect(
    useCallback(() => {
      fetchItems();
    }, [fetchItems])
  );

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleRate = async (itemId: string, rating: boolean, feedback?: string) => {
    // Implementation for rating items
    console.log(`Rated item ${itemId}: ${rating ? 'Positive' : 'Negative'}`, feedback);
    // Here we would call an API to save the rating
  };

  if (locationError) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.errorText}>
          Location access is required to show nearby items to rate.
          Please enable location services and restart the app.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text style={styles.loadingText}>Finding nearby items...</Text>
        </View>
      ) : (
        <FlashList
          data={items}
          renderItem={({ item }) => (
            <RatingCard 
              item={item}
              onRate={handleRate}
            />
          )}
          estimatedItemSize={350}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#666',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  errorText: {
    margin: 20,
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#EF4444',
    textAlign: 'center',
  },
});