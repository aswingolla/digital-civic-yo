import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable, Animated, PanResponder } from 'react-native';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react-native';
import { ItemType } from '@/types';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';
import { CategoryBadge } from './CategoryBadge';
import { FeedbackModal } from './FeedbackModal';

interface RatingCardProps {
  item: ItemType;
  onRate: (itemId: string, rating: boolean, feedback?: string) => void;
}

export function RatingCard({ item, onRate }: RatingCardProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedRating, setSelectedRating] = useState<boolean | null>(null);
  const pan = useRef(new Animated.ValueXY()).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (Math.abs(gestureState.dx) > 20) {
        Animated.event(
          [null, { dx: pan.x }],
          { useNativeDriver: false }
        )(_, gestureState);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 120) {
        // Swiped right - positive rating
        triggerHaptic('success');
        handleRate(true);
      } else if (gestureState.dx < -120) {
        // Swiped left - negative rating
        triggerHaptic('error');
        handleRate(false);
      } else {
        // Not enough to trigger, reset position
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    }
  });
  
  const triggerHaptic = (type: 'success' | 'error') => {
    if (Platform.OS !== 'web') {
      if (type === 'success') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    }
  };
  
  const handleRate = (isPositive: boolean) => {
    setSelectedRating(isPositive);
    
    // If this is a negative rating, show the feedback modal
    if (!isPositive) {
      setShowFeedback(true);
      // Reset card position for feedback
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
      return;
    }
    
    // For positive ratings, just send the rating and animate out
    onRate(item.id, isPositive);
    animateOut();
  };
  
  const handleFeedbackSubmit = (feedback: string) => {
    setShowFeedback(false);
    onRate(item.id, selectedRating || false, feedback);
    animateOut();
  };
  
  const animateOut = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(pan, {
        toValue: { x: selectedRating ? 300 : -300, y: 0 },
        useNativeDriver: false,
      }),
    ]).start();
  };
  
  // Interpolate rotation based on pan.x
  const rotate = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-10deg', '0deg', '10deg'],
  });
  
  // Interpolate background colors for swipe indicators
  const leftBackgroundColor = pan.x.interpolate({
    inputRange: [-200, 0],
    outputRange: ['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0)'],
    extrapolate: 'clamp',
  });
  
  const rightBackgroundColor = pan.x.interpolate({
    inputRange: [0, 200],
    outputRange: ['rgba(16, 185, 129, 0)', 'rgba(16, 185, 129, 0.2)'],
    extrapolate: 'clamp',
  });
  
  return (
    <Animated.View
      style={[
        styles.cardContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateX: pan.x }, { rotate }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Animated.View style={[styles.swipeIndicator, styles.leftIndicator, { backgroundColor: leftBackgroundColor }]}>
        <ThumbsDown size={48} color="#EF4444" />
      </Animated.View>
      
      <Animated.View style={[styles.swipeIndicator, styles.rightIndicator, { backgroundColor: rightBackgroundColor }]}>
        <ThumbsUp size={48} color="#10B981" />
      </Animated.View>
      
      <View style={styles.cardContent}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        
        <View style={styles.categoryContainer}>
          <CategoryBadge category={item.category} />
        </View>
        
        <View style={styles.infoContainer}>
          <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.distance}>{item.distance}km away</Text>
          </View>
          
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          
          <View style={styles.ratingsContainer}>
            <View style={styles.ratingItem}>
              <ThumbsUp size={16} color="#10B981" />
              <Text style={styles.ratingText}>{item.positiveRatings}</Text>
            </View>
            
            <View style={styles.ratingItem}>
              <ThumbsDown size={16} color="#EF4444" />
              <Text style={styles.ratingText}>{item.negativeRatings}</Text>
            </View>
            
            <View style={styles.ratingItem}>
              <MessageSquare size={16} color="#6B7280" />
              <Text style={styles.ratingText}>{item.commentCount}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.actionButtons}>
          <Pressable
            style={[styles.actionButton, styles.negativeButton]}
            onPress={() => handleRate(false)}
          >
            <ThumbsDown size={24} color="#FFFFFF" />
          </Pressable>
          
          <Pressable
            style={[styles.actionButton, styles.positiveButton]}
            onPress={() => handleRate(true)}
          >
            <ThumbsUp size={24} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>
      
      <FeedbackModal
        visible={showFeedback}
        onSubmit={handleFeedbackSubmit}
        onClose={() => {
          setShowFeedback(false);
          // Reset position since we're canceling
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }}
        itemName={item.name}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    height: 360,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  swipeIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  leftIndicator: {
    alignItems: 'flex-start',
    paddingLeft: 24,
  },
  rightIndicator: {
    alignItems: 'flex-end',
    paddingRight: 24,
  },
  cardContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  categoryContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  infoContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 18,
    color: '#1F2937',
    flex: 1,
  },
  distance: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  description: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
  },
  ratingsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  ratingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  ratingText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  negativeButton: {
    backgroundColor: '#EF4444',
  },
  positiveButton: {
    backgroundColor: '#10B981',
  },
});