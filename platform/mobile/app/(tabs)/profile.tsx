import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, CreditCard as Edit3, Star, MapPin, Award, ChevronRight, User, Bell, Shield, HelpCircle, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const userStats = [
    { label: 'Reviews', value: '47', icon: Star },
    { label: 'Places Visited', value: '23', icon: MapPin },
    { label: 'Achievements', value: '8', icon: Award },
  ];

  const menuItems = [
    { icon: User, title: 'Edit Profile', subtitle: 'Update your information' },
    { icon: Bell, title: 'Notifications', subtitle: 'Manage your alerts' },
    { icon: Shield, title: 'Privacy & Security', subtitle: 'Control your data' },
    { icon: HelpCircle, title: 'Help & Support', subtitle: 'Get assistance' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <LinearGradient
          colors={['#3B82F6', '#1D4ED8']}
          style={styles.profileCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton}>
              <Edit3 size={16} color="#3B82F6" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>Sarah Johnson</Text>
          <Text style={styles.userLocation}>📍 Downtown, Springfield</Text>
          <Text style={styles.userBio}>
            Community enthusiast helping to improve local services and businesses
          </Text>
          
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Award size={16} color="#F59E0B" />
              <Text style={styles.badgeText}>Top Reviewer</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {userStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <stat.icon size={24} color="#3B82F6" />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          
          <View style={styles.activityCard}>
            <View style={styles.activityIcon}>
              <Star size={20} color="#F59E0B" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Reviewed Central Library</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
            <View style={styles.activityRating}>
              <Text style={styles.ratingText}>5.0</Text>
            </View>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityIcon}>
              <MapPin size={20} color="#10B981" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Visited Community Garden</Text>
              <Text style={styles.activityTime}>1 day ago</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <item.icon size={20} color="#6B7280" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <ChevronRight size={20} color="#D1D5DB" />
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity style={[styles.menuItem, styles.logoutItem]}>
            <View style={styles.menuIcon}>
              <LogOut size={20} color="#EF4444" />
            </View>
            <View style={styles.menuContent}>
              <Text style={[styles.menuTitle, { color: '#EF4444' }]}>Sign Out</Text>
              <Text style={styles.menuSubtitle}>Sign out of your account</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  profileCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  profileHeader: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  userLocation: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#DBEAFE',
    marginBottom: 12,
  },
  userBio: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#BFDBFE',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    marginLeft: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 32,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  activityRating: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#92400E',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  logoutItem: {
    marginTop: 8,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});