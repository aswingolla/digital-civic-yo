import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TrendingUp, TrendingDown, Calendar, Users, Award, Activity } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function PulseScreen() {
  const trendingData = [
    { name: 'Community Center', score: 92, trend: 'up', change: '+5%' },
    { name: 'Public Library', score: 89, trend: 'up', change: '+3%' },
    { name: 'City Park', score: 87, trend: 'stable', change: '0%' },
    { name: 'Health Clinic', score: 85, trend: 'up', change: '+2%' },
    { name: 'Bus Station', score: 72, trend: 'down', change: '-4%' },
  ];

  const timeFilters = ['Today', 'This Week', 'This Month'];
  const selectedFilter = 'This Week';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Community Pulse</Text>
            <Text style={styles.subtitle}>Real-time community insights</Text>
          </View>
          <TouchableOpacity style={styles.activityButton}>
            <Activity size={24} color="#3B82F6" />
          </TouchableOpacity>
        </View>

        {/* Time Filter */}
        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {timeFilters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterChip,
                  filter === selectedFilter && styles.filterChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    filter === selectedFilter && styles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsContainer}>
          <LinearGradient
            colors={['#3B82F6', '#1D4ED8']}
            style={styles.statCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TrendingUp size={32} color="#FFFFFF" />
            <Text style={styles.statNumber}>4.7</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
            <Text style={styles.statChange}>+0.3 this week</Text>
          </LinearGradient>

          <View style={styles.statCard}>
            <Users size={32} color="#10B981" />
            <Text style={[styles.statNumber, { color: '#1F2937' }]}>2.8K</Text>
            <Text style={[styles.statLabel, { color: '#6B7280' }]}>Active Users</Text>
            <Text style={styles.statChangePositive}>+12% this week</Text>
          </View>
        </View>

        {/* Trending Places */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Places</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {trendingData.map((item, index) => (
            <View key={index} style={styles.trendingItem}>
              <View style={styles.trendingRank}>
                <Text style={styles.rankNumber}>{index + 1}</Text>
              </View>
              
              <View style={styles.trendingContent}>
                <Text style={styles.trendingName}>{item.name}</Text>
                <View style={styles.trendingMeta}>
                  <Text style={styles.trendingScore}>Score: {item.score}</Text>
                  <View style={styles.trendingChange}>
                    {item.trend === 'up' ? (
                      <TrendingUp size={14} color="#10B981" />
                    ) : item.trend === 'down' ? (
                      <TrendingDown size={14} color="#EF4444" />
                    ) : (
                      <View style={styles.stableDot} />
                    )}
                    <Text
                      style={[
                        styles.changeText,
                        {
                          color:
                            item.trend === 'up'
                              ? '#10B981'
                              : item.trend === 'down'
                              ? '#EF4444'
                              : '#6B7280',
                        },
                      ]}
                    >
                      {item.change}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.scoreBar}>
                <View
                  style={[
                    styles.scoreProgress,
                    { width: `${item.score}%` },
                    {
                      backgroundColor:
                        item.score >= 85
                          ? '#10B981'
                          : item.score >= 70
                          ? '#F59E0B'
                          : '#EF4444',
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Insights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Insights</Text>
          
          <View style={styles.insightCard}>
            <Award size={24} color="#F59E0B" />
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Top Performer</Text>
              <Text style={styles.insightText}>
                Community Center leads with a 92% satisfaction score this week
              </Text>
            </View>
          </View>

          <View style={styles.insightCard}>
            <Calendar size={24} color="#3B82F6" />
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Peak Activity</Text>
              <Text style={styles.insightText}>
                Most reviews submitted on weekends between 2-4 PM
              </Text>
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
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
  },
  activityButton: {
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
  filterContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 12,
  },
  filterChipActive: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 32,
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
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#DBEAFE',
    marginBottom: 8,
  },
  statChange: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#BFDBFE',
  },
  statChangePositive: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#10B981',
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
  seeAllText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#3B82F6',
  },
  trendingItem: {
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
  trendingRank: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rankNumber: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#3B82F6',
  },
  trendingContent: {
    flex: 1,
  },
  trendingName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  trendingMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendingScore: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  trendingChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginLeft: 4,
  },
  stableDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6B7280',
  },
  scoreBar: {
    width: 60,
    height: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 2,
    marginLeft: 12,
  },
  scoreProgress: {
    height: '100%',
    borderRadius: 2,
  },
  insightCard: {
    flexDirection: 'row',
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
  insightContent: {
    flex: 1,
    marginLeft: 12,
  },
  insightTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  insightText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
  },
});