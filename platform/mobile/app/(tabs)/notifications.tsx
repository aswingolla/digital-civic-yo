import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Settings, CheckCircle, AlertTriangle, Info, Star } from 'lucide-react-native';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      type: 'rating',
      title: 'New Review Posted',
      message: 'Someone rated Central Library 5 stars with a positive review',
      time: '2 min ago',
      read: false,
      icon: Star,
      color: '#F59E0B',
    },
    {
      id: 2,
      type: 'alert',
      title: 'Service Update',
      message: 'Community Center will be closed for maintenance this weekend',
      time: '1 hour ago',
      read: false,
      icon: AlertTriangle,
      color: '#EF4444',
    },
    {
      id: 3,
      type: 'info',
      title: 'Weekly Pulse Report',
      message: 'Your neighborhood pulse report is ready to view',
      time: '3 hours ago',
      read: true,
      icon: Info,
      color: '#3B82F6',
    },
    {
      id: 4,
      type: 'success',
      title: 'Review Published',
      message: 'Your review of City Park has been published successfully',
      time: '1 day ago',
      read: true,
      icon: CheckCircle,
      color: '#10B981',
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Notifications</Text>
          {unreadCount > 0 && (
            <Text style={styles.unreadCount}>{unreadCount} unread</Text>
          )}
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Mark All Read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.actionButtonSecondary]}>
          <Text style={[styles.actionButtonText, styles.actionButtonTextSecondary]}>
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.notificationsList}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[
                styles.notificationCard,
                !notification.read && styles.notificationCardUnread,
              ]}
            >
              <View style={styles.notificationContent}>
                <View style={[styles.iconContainer, { backgroundColor: `${notification.color}15` }]}>
                  <notification.icon size={20} color={notification.color} />
                </View>
                
                <View style={styles.notificationText}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
                
                {!notification.read && <View style={styles.unreadDot} />}
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Bell size={64} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>No Notifications</Text>
            <Text style={styles.emptyMessage}>
              You're all caught up! New notifications will appear here.
            </Text>
          </View>
        )}
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  unreadCount: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#3B82F6',
    marginTop: 4,
  },
  settingsButton: {
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
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  actionButtonSecondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  actionButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
  },
  actionButtonTextSecondary: {
    color: '#6B7280',
  },
  notificationsList: {
    flex: 1,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  notificationCardUnread: {
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B82F6',
    marginLeft: 8,
    marginTop: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
});