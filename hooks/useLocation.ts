import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Platform } from 'react-native';

export function useLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
          setLocationError('Location permission denied');
          return;
        }
        
        const currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        
        if (isMounted) {
          setLocation(currentLocation);
        }
      } catch (error) {
        if (isMounted) {
          setLocationError('Could not get location');
          console.error('Error getting location:', error);
        }
      }
    };
    
    // Only request location on native platforms or when running in development on web
    if (Platform.OS !== 'web' || process.env.NODE_ENV === 'development') {
      getLocation();
    } else {
      // For web in production, use a mock location (e.g., city center)
      setLocation({
        coords: {
          latitude: 37.7749,
          longitude: -122.4194,
          altitude: null,
          accuracy: 100,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      });
    }
    
    return () => {
      isMounted = false;
    };
  }, []);

  return { location, locationError };
}