import { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocation } from '@/hooks/useLocation';
import { MapLocation, MapFilters } from '@/types/shared/map';
import { getMapLocations } from '@/utils/mapData';
import { CategorySelector } from '@/components/map/CategorySelector';
import { MapInfoCard } from '@/components/map/MapInfoCard';
import { MapControlPanel } from '@/components/map/MapControlPanel';
import { MapMarker } from '@/components/map/MapMarker';
import { BottomSheet } from '@/components/common/BottomSheet';

export default function MapScreen() {
  const insets = useSafeAreaInsets();
  const mapRef = useRef<MapView>(null);
  const [filters, setFilters] = useState<MapFilters>({ type: 'all' });
  const { location } = useLocation();
  const [mapLocations, setMapLocations] = useState<MapLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location) {
      loadMapData();
    }
  }, [location, filters]);

  const loadMapData = useCallback(async () => {
    if (!location) return;
    
    try {
      setLoading(true);
      const locations = await getMapLocations(filters);
      setMapLocations(locations);
    } catch (error) {
      console.error('Error loading map data:', error);
    } finally {
      setLoading(false);
    }
  }, [location, filters]);

  const handleMarkerPress = (location: MapLocation) => {
    setSelectedLocation(location);
  };

  const handleFilterChange = (newFilters: Partial<MapFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (!location) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {mapLocations.map((loc) => (
          <MapMarker
            key={loc.id}
            location={loc}
            onPress={handleMarkerPress}
          />
        ))}
      </MapView>
      
      <View style={[styles.filterContainer, { top: insets.top + 10 }]}>
        <CategorySelector
          selectedType={filters.type}
          selectedCategory={filters.category}
          onSelectType={(type) => handleFilterChange({ type })}
          onSelectCategory={(category) => handleFilterChange({ category })}
        />
      </View>
      
      <MapControlPanel
        onToggleVerified={(verified) => handleFilterChange({ verified })}
        showVerifiedOnly={filters.verified || false}
      />
      
      {selectedLocation && (
        <BottomSheet onClose={() => setSelectedLocation(null)}>
          <MapInfoCard location={selectedLocation} />
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  map: {
    flex: 1,
  },
  filterContainer: {
    position: 'absolute',
    left: 10,
    right: 10,
    zIndex: 1,
  },
  loadingText: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
  },
});