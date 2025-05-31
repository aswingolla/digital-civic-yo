import { StyleSheet, View, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { Building2, Government } from 'lucide-react-native';
import { MapLocation } from '@/types/shared/map';

interface MapMarkerProps {
  location: MapLocation;
  onPress: (location: MapLocation) => void;
}

export function MapMarker({ location, onPress }: MapMarkerProps) {
  return (
    <Marker
      coordinate={location.coordinates}
      onPress={() => onPress(location)}
    >
      <View style={[
        styles.markerContainer,
        { backgroundColor: location.type === 'business' ? '#3B82F6' : '#10B981' }
      ]}>
        {location.type === 'business' ? (
          <Building2 size={16} color="#FFFFFF" />
        ) : (
          <Government size={16} color="#FFFFFF" />
        )}
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label} numberOfLines={1}>
          {location.name}
        </Text>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerContainer: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  labelContainer: {
    position: 'absolute',
    top: '100%',
    left: -50,
    right: -50,
    alignItems: 'center',
    paddingTop: 4,
  },
  label: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontFamily: 'SF-Pro-Text-Medium',
    color: '#1F2937',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});