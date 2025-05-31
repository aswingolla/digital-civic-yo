import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';
import { MapPin, Home, BarChart, Bell, Menu } from 'lucide-react-native';
import { ProfileTabHeader } from '@/components/headers/ProfileTabHeader';
import { HomeTabHeader } from '@/components/headers/HomeTabHeader';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
        },
        headerShown: true,
        tabBarLabelStyle: {
          fontFamily: 'SF-Pro-Text-Medium',
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          header: () => <HomeTabHeader />,
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <MapPin size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="pulse"
        options={{
          title: 'Pulse',
          tabBarIcon: ({ color }) => <BarChart size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Alerts',
          tabBarIcon: ({ color }) => <Bell size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          header: () => <ProfileTabHeader />,
          tabBarIcon: ({ color }) => <Menu size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}