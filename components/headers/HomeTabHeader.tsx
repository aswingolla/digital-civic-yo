import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Filter } from 'lucide-react-native';
import { useAuth } from '@/context/AuthContext';

export function HomeTabHeader() {
  const router = useRouter();
  const { user } = useAuth();
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Civic YO!</Text>
        <Text style={styles.location}>
          {user?.neighborhood || 'Your Area'}
        </Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Pressable
          style={styles.iconButton}
          onPress={() => router.push('/search')}
        >
          <Search size={24} color="#1F2937" />
        </Pressable>
        
        <Pressable
          style={styles.iconButton}
          onPress={() => router.push('/filters')}
        >
          <Filter size={24} color="#1F2937" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 24,
    color: '#3B82F6',
  },
  location: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
});