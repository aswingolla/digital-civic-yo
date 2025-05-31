import { useCallback, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { useLocation } from '@/hooks/useLocation';
import { getPulseReports } from '@/utils/dataService';
import { PulseReportType } from '@/types';
import { PulseReportCard } from '@/components/pulse/PulseReportCard';
import { TimePeriodSelector } from '@/components/pulse/TimePeriodSelector';

export default function PulseScreen() {
  const insets = useSafeAreaInsets();
  const { location } = useLocation();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [pulseReports, setPulseReports] = useState<PulseReportType[]>([]);
  const [timePeriod, setTimePeriod] = useState<'day' | 'week' | 'month'>('week');
  
  const fetchPulseReports = useCallback(async () => {
    if (!location) return;
    
    try {
      setLoading(true);
      const reports = await getPulseReports(location, timePeriod);
      setPulseReports(reports);
    } catch (error) {
      console.error('Error fetching pulse reports:', error);
    } finally {
      setLoading(false);
    }
  }, [location, timePeriod]);
  
  useFocusEffect(
    useCallback(() => {
      fetchPulseReports();
    }, [fetchPulseReports])
  );
  
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchPulseReports();
    setRefreshing(false);
  }, [fetchPulseReports]);
  
  const handleTimePeriodChange = (period: 'day' | 'week' | 'month') => {
    setTimePeriod(period);
  };
  
  if (!location) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.messageText}>Location services needed to show local pulse.</Text>
      </View>
    );
  }
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Community Pulse</Text>
        <Text style={styles.subtitle}>See what's trending in your area</Text>
      </View>
      
      <TimePeriodSelector 
        selected={timePeriod} 
        onChange={handleTimePeriodChange} 
      />
      
      {loading && !refreshing ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text style={styles.loadingText}>Loading community pulse...</Text>
        </View>
      ) : (
        <FlashList
          data={pulseReports}
          renderItem={({ item }) => <PulseReportCard report={item} />}
          estimatedItemSize={250}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#3B82F6']}
              tintColor="#3B82F6"
            />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No pulse reports available for this time period.</Text>
            </View>
          }
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
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 28,
    color: '#1F2937',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#6B7280',
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
    color: '#6B7280',
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  emptyText: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  messageText: {
    margin: 20,
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});