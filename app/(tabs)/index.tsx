import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, Filter, Star, MapPin, TrendingUp, Users, Award, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const featuredItems = [
    {
      id: 1,
      title: 'Downtown Community Center',
      category: 'Community',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '0.5 km',
    },
    {
      id: 2,
      title: 'Riverside Park',
      category: 'Recreation',
      rating: 4.6,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '1.2 km',
    },
    {
      id: 3,
      title: 'City Library',
      category: 'Education',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '0.8 km',
    },
  ];

  const quickActions = [
    { icon: MapPin, title: 'Explore', subtitle: 'Find nearby places', color: '#3B82F6' },
    { icon: TrendingUp, title: 'Trending', subtitle: 'What\'s popular', color: '#10B981' },
    { icon: Users, title: 'Community', subtitle: 'Connect locally', color: '#F59E0B' },
    { icon: Award, title: 'Quality', subtitle: 'Top rated', color: '#EF4444' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning!</Text>
            <Text style={styles.location}>📍 Downtown, Springfield</Text>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Search size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <LinearGradient
          colors={['#3B82F6', '#1D4ED8']}
          style={styles.heroCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Discover Your Community</Text>
            <Text style={styles.heroSubtitle}>
              Rate, review, and explore local businesses, services, and civic facilities
            </Text>
            <TouchableOpacity 
              style={styles.heroButton}
              onPress={() => router.push('/map')}
            >
              <Text style={styles.heroButtonText}>Start Exploring</Text>
              <ChevronRight size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.quickActionCard}>
                <View style={[styles.quickActionIcon, { backgroundColor: `${action.color}15` }]}>
                  <action.icon size={24} color={action.color} />
                </View>
                <Text style={styles.quickActionTitle}>{action.title}</Text>
                <Text style={styles.quickActionSubtitle}>{action.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Places */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Places</Text>
            <TouchableOpacity style={styles.filterButton}>
              <Filter size={16} color="#6B7280" />
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {featuredItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.featuredCard}>
                <Image source={{ uri: item.image }} style={styles.featuredImage} />
                <View style={styles.featuredContent}>
                  <View style={styles.featuredHeader}>
                    <Text style={styles.featuredCategory}>{item.category}</Text>
                    <View style={styles.ratingBadge}>
                      <Star size={12} color="#F59E0B" fill="#F59E0B" />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.featuredTitle}>{item.title}</Text>
                  <View style={styles.featuredFooter}>
                    <Text style={styles.reviewCount}>{item.reviews} reviews</Text>
                    <Text style={styles.distance}>{item.distance}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Community Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Impact</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>2,847</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>156</Text>
              <Text style={styles.statLabel}>Places</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>4.7</Text>
              <Text style={styles.statLabel}>Avg Rating</Text>
            </View>
          </View>
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
  greeting: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  searchButton: {
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
  heroCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 24,
    marginBottom: 32,
  },
  heroContent: {
    alignItems: 'flex-start',
  },
  heroTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#DBEAFE',
    lineHeight: 24,
    marginBottom: 20,
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  heroButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#3B82F6',
    marginRight: 8,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginLeft: 6,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  quickActionCard: {
    width: (width - 56) / 2,
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
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  featuredScroll: {
    paddingLeft: 20,
  },
  featuredCard: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  featuredImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  featuredContent: {
    padding: 16,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  featuredCategory: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#3B82F6',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#92400E',
    marginLeft: 4,
  },
  featuredTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 8,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewCount: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  distance: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#3B82F6',
  },
  statsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
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
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});