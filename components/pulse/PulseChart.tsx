import { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { PulseReportItem } from '@/types';

interface PulseChartProps {
  items: PulseReportItem[];
  maxScore: number;
}

export function PulseChart({ items, maxScore }: PulseChartProps) {
  const [loaded, setLoaded] = useState(false);
  const windowWidth = Dimensions.get('window').width - 48; // Accounting for padding

  // Trigger animation after initial render
  useCallback(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const barWidth = (item.score / maxScore) * windowWidth;
        
        const barStyle = useAnimatedStyle(() => ({
          width: withSpring(loaded ? barWidth : 0, {
            damping: 15,
            stiffness: 100,
          }),
        }));

        return (
          <View key={item.id} style={styles.barContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.rank}>{index + 1}</Text>
              <View style={styles.nameContainer}>
                <Text style={styles.name} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.category}>{item.category}</Text>
              </View>
              <Text style={[
                styles.score,
                { color: item.trend === 'up' ? '#10B981' : item.trend === 'down' ? '#EF4444' : '#6B7280' }
              ]}>
                {item.score}
                {item.trend === 'up' ? ' ↑' : item.trend === 'down' ? ' ↓' : ''}
              </Text>
            </View>
            
            <View style={styles.barBackground}>
              <Animated.View
                style={[
                  styles.bar,
                  barStyle,
                  { 
                    backgroundColor: item.trend === 'up' 
                      ? '#10B981' 
                      : item.trend === 'down' 
                      ? '#EF4444' 
                      : '#6B7280' 
                  }
                ]}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  barContainer: {
    marginBottom: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rank: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#3B82F6',
    width: 24,
    textAlign: 'center',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#1F2937',
  },
  category: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  score: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    marginLeft: 12,
    minWidth: 50,
    textAlign: 'right',
  },
  barBackground: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },
});