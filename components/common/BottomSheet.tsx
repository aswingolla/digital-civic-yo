import { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View, Pressable, Animated, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { X } from 'lucide-react-native';

interface BottomSheetProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function BottomSheet({ children, onClose }: BottomSheetProps) {
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get('window');
  const translateY = useRef(new Animated.Value(height)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  
  const animateIn = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY, opacity]);
  
  const animateOut = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(onClose);
  }, [height, translateY, opacity, onClose]);
  
  useEffect(() => {
    animateIn();
  }, [animateIn]);
  
  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View 
        style={[
          styles.overlay,
          { opacity }
        ]}
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={animateOut}
        />
      </Animated.View>
      
      <Animated.View
        style={[
          styles.bottomSheet,
          { 
            transform: [{ translateY }],
            paddingBottom: insets.bottom || 16
          }
        ]}
      >
        <View style={styles.handle} />
        
        <Pressable style={styles.closeButton} onPress={animateOut}>
          <X size={24} color="#6B7280" />
        </Pressable>
        
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '80%',
  },
  handle: {
    width: 36,
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 4,
    zIndex: 1,
  },
});