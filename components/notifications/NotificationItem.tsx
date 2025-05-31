import { StyleSheet, View, Text, Pressable } from 'react-native';
import { formatDistanceToNow } from '@/utils/dateUtils';
import { NotificationType } from '@/types';

interface NotificationItemProps {
  notification: NotificationType;
  onPress: () => void;
}

export function NotificationItem({ notification, onPress }: NotificationItemProps) {
  const getIconForType = () => {
    switch (notification.type) {
      case 'rating':
        return '👍';
      case 'comment':
        return '💬';
      case 'mention':
        return '@️';
      case 'announcement':
        return '📢';
      default:
        return '🔔';
    }
  };
  
  return (
    <Pressable 
      style={[
        styles.container,
        !notification.read && styles.unreadContainer
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{getIconForType()}</Text>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {notification.title}
        </Text>
        
        <Text style={styles.message} numberOfLines={2}>
          {notification.message}
        </Text>
        
        <Text style={styles.time}>
          {formatDistanceToNow(notification.createdAt)}
        </Text>
      </View>
      
      {!notification.read && (
        <View style={styles.unreadIndicator} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  unreadContainer: {
    backgroundColor: '#F0F9FF',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  message: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
    lineHeight: 20,
  },
  time: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B82F6',
    marginLeft: 8,
    alignSelf: 'center',
  },
});