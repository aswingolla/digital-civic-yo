import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Settings } from 'lucide-react-native';

export function ProfileTabHeader() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      <Pressable
        style={styles.iconButton}
        onPress={() => router.push('/profile/settings')}
      >
        <Settings size={24} color="#1F2937" />
      </Pressable>
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
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 24,
    color: '#1F2937',
  },
  iconButton: {
    padding: 8,
  },
});