import { StyleSheet, View, Text, Image, Pressable, ScrollView } from 'react-native';
import { ThumbsUp, ThumbsDown, MessageSquare, Navigation } from 'lucide-react-native';
import { ItemType } from '@/types';
import { CategoryBadge } from '../rating/CategoryBadge';

interface MapInfoCardProps {
  item: ItemType;
}

export function MapInfoCard({ item }: MapInfoCardProps) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: item.imageUrl }} 
            style={styles.image} 
            resizeMode="cover"
          />
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.headerRow}>
            <View>
              <CategoryBadge category={item.category} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>
            
            <Pressable style={styles.directionsButton}>
              <Navigation size={20} color="#3B82F6" />
              <Text style={styles.directionsText}>Directions</Text>
            </Pressable>
          </View>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <ThumbsUp size={18} color="#10B981" />
              <Text style={styles.statValue}>{item.positiveRatings}</Text>
            </View>
            
            <View style={styles.statItem}>
              <ThumbsDown size={18} color="#EF4444" />
              <Text style={styles.statValue}>{item.negativeRatings}</Text>
            </View>
            
            <View style={styles.statItem}>
              <MessageSquare size={18} color="#6B7280" />
              <Text style={styles.statValue}>{item.commentCount}</Text>
            </View>
          </View>
          
          <Text style={styles.description}>{item.description}</Text>
          
          {item.topTags && item.topTags.length > 0 && (
            <View style={styles.tagsContainer}>
              <Text style={styles.tagsTitle}>Top Tags:</Text>
              <View style={styles.tagsList}>
                {item.topTags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      
      <View style={styles.actionButtons}>
        <Pressable style={styles.actionButton}>
          <ThumbsDown size={24} color="#FFFFFF" />
        </Pressable>
        
        <Pressable style={[styles.actionButton, styles.positiveButton]}>
          <ThumbsUp size={24} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  imageContainer: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  name: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 20,
    color: '#1F2937',
    marginTop: 8,
    marginBottom: 4,
  },
  address: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  directionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginTop: 4,
  },
  directionsText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#3B82F6',
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  statValue: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    color: '#4B5563',
    marginLeft: 6,
  },
  description: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 16,
  },
  tagsContainer: {
    marginTop: 8,
  },
  tagsTitle: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  tagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#4B5563',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  positiveButton: {
    backgroundColor: '#10B981',
  },
});