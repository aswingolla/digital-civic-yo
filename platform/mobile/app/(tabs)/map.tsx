import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, MapPin, Star, Navigation, Layers } from 'lucide-react-native';

export default function MapScreen() {
  const nearbyPlaces = [
    {
      id: 1,
      name: 'Central Library',
      category: 'Education',
      rating: 4.8,
      distance: '0.3 km',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Community Garden',
      category: 'Recreation',
      rating: 4.6,
      distance: '0.7 km',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Health Clinic',
      category: 'Healthcare',
      rating: 4.9,
      distance: '1.1 km',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#6B7280" />
          <Text style={styles.searchPlaceholder}>Search places...</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <MapPin size={48} color="#3B82F6" />
          <Text style={styles.mapPlaceholderText}>Interactive Map</Text>
          <Text style={styles.mapPlaceholderSubtext}>
            Explore your neighborhood and discover local places
          </Text>
        </View>
        
        {/* Map Controls */}
        <View style={styles.mapControls}>
          <TouchableOpacity style={styles.controlButton}>
            <Layers size={20} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Navigation size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Nearby Places */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        <Text style={styles.bottomSheetTitle}>Nearby Places</Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          {nearbyPlaces.map((place) => (
            <TouchableOpacity key={place.id} style={styles.placeCard}>
              <Image source={{ uri: place.image }} style={styles.placeImage} />
              <View style={styles.placeContent}>
                <View style={styles.placeHeader}>
                  <Text style={styles.placeName}>{place.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Star size={14} color="#F59E0B" fill="#F59E0B" />
                    <Text style={styles.ratingText}>{place.rating}</Text>
                  </View>
                </View>
                <Text style={styles.placeCategory}>{place.category}</Text>
                <Text style={styles.placeDistance}>{place.distance} away</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchPlaceholder: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginLeft: 12,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    margin: 20,
    borderRadius: 16,
  },
  mapPlaceholderText: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginTop: 16,
    marginBottom: 8,
  },
  mapPlaceholderSubtext: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  mapControls: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    gap: 12,
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingHorizontal: 20,
    maxHeight: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  placeCard: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  placeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  placeContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  placeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  placeName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#92400E',
    marginLeft: 4,
  },
  placeCategory: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#3B82F6',
    marginTop: 2,
  },
  placeDistance: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 2,
  },
});