import { useCallback, useState } from 'react';
import { StyleSheet, View, Text, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useAuth } from '@/context/AuthContext';
import { getNotifications, markNotificationAsRead } from '@/utils/dataService';
import { NotificationType } from '@/types';
import { NotificationItem } from '@/components/notifications/NotificationItem';
import { EmptyState } from '@/components/common/EmptyState';

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  const fetchNotifications = useCallback(async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const userNotifications = await getNotifications(user.id);
      setNotifications(userNotifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);
  
  useFocusEffect(
    useCallback(() => {
      fetchNotifications();
    }, [fetchNotifications])
  );
  
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchNotifications();
    setRefreshing(false);
  }, [fetchNotifications]);
  
  const handleNotificationPress = async (notification: NotificationType) => {
    if (!notification.read) {
      try {
        await markNotificationAsRead(notification.id);
        setNotifications(prev => 
          prev.map(item => 
            item.id === notification.id ? { ...item, read: true } : item
          )
        );
      } catch (error) {
        console.error('Error marking notification as read:', error);
      }
    }
    
    // Handle navigation based on notification type
    // This would typically navigate to the relevant screen
  };
  
  if (!user) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <EmptyState
          title="Sign In Required"
          message="Please sign in to view your notifications"
          icon="bell-off"
        />
      </View>
    );
  }
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        {notifications.length > 0 && (
          <Text style={styles.subtitle}>
            {notifications.filter(n => !n.read).length} unread
          </Text>
        )}
      </View>
      
      <FlashList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem 
            notification={item} 
            onPress={() => handleNotificationPress(item)}
          />
        )}
        estimatedItemSize={80}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#3B82F6']}
            tintColor="#3B82F6"
          />
        }
        ListEmptyComponent={
          <EmptyState 
            title="No Notifications"
            message="You don't have any notifications yet"
            icon="bell"
          />
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 28,
    color: '#1F2937',
  },
  subtitle: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#3B82F6',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
    flexGrow: 1,
  },
});