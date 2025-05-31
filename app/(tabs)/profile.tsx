import { StyleSheet, View, Text, ScrollView, Pressable, Platform, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { Settings, LogOut, Shield, MapPin, Bell, HelpCircle, User, ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { ProfileMenuSection } from '@/components/profile/ProfileMenuSection';
import { ProfileMenuItem } from '@/components/profile/ProfileMenuItem';
import { ConfirmationDialog } from '@/components/common/ConfirmationDialog';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationTrackingEnabled, setLocationTrackingEnabled] = useState(true);
  
  const handleSignOut = async () => {
    await signOut();
    router.replace('/auth/login');
  };
  
  const navigateTo = (path: string) => {
    router.push(path);
  };
  
  const renderUserInfo = () => {
    if (!user) {
      return (
        <Pressable
          style={styles.signInButton}
          onPress={() => router.push('/auth/login')}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>
      );
    }
    
    return (
      <View style={styles.userInfoContainer}>
        <View style={styles.profileImagePlaceholder}>
          <Text style={styles.profileInitials}>
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </Text>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{user.name || 'Anonymous User'}</Text>
          <Text style={styles.userLocation}>{user.neighborhood || 'Location not set'}</Text>
        </View>
      </View>
    );
  };
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderUserInfo()}
        
        {user && (
          <>
            <ProfileMenuSection title="Account">
              <ProfileMenuItem
                icon={<User size={22} color="#6B7280" />}
                title="Profile Information"
                onPress={() => navigateTo('/profile/edit')}
                showChevron
              />
              <ProfileMenuItem
                icon={<MapPin size={22} color="#6B7280" />}
                title="My Neighborhood"
                onPress={() => navigateTo('/profile/neighborhood')}
                showChevron
              />
            </ProfileMenuSection>
          </>
        )}
        
        <ProfileMenuSection title="Preferences">
          <ProfileMenuItem
            icon={<Bell size={22} color="#6B7280" />}
            title="Notifications"
            rightElement={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#D1D5DB', true: '#BFDBFE' }}
                thumbColor={notificationsEnabled ? '#3B82F6' : '#9CA3AF'}
              />
            }
          />
          <ProfileMenuItem
            icon={<MapPin size={22} color="#6B7280" />}
            title="Location Services"
            rightElement={
              <Switch
                value={locationTrackingEnabled}
                onValueChange={setLocationTrackingEnabled}
                trackColor={{ false: '#D1D5DB', true: '#BFDBFE' }}
                thumbColor={locationTrackingEnabled ? '#3B82F6' : '#9CA3AF'}
              />
            }
          />
        </ProfileMenuSection>
        
        <ProfileMenuSection title="Support">
          <ProfileMenuItem
            icon={<HelpCircle size={22} color="#6B7280" />}
            title="Help Center"
            onPress={() => navigateTo('/support/help')}
            showChevron
          />
          <ProfileMenuItem
            icon={<Shield size={22} color="#6B7280" />}
            title="Privacy Policy"
            onPress={() => navigateTo('/support/privacy')}
            showChevron
          />
        </ProfileMenuSection>
        
        {user && (
          <Pressable
            style={styles.logoutButton}
            onPress={() => setShowLogoutConfirmation(true)}
          >
            <LogOut size={22} color="#EF4444" />
            <Text style={styles.logoutText}>Sign Out</Text>
          </Pressable>
        )}
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>
      
      <ConfirmationDialog
        visible={showLogoutConfirmation}
        title="Sign Out"
        message="Are you sure you want to sign out?"
        confirmText="Sign Out"
        cancelText="Cancel"
        confirmButtonStyle={{ backgroundColor: '#EF4444' }}
        onConfirm={handleSignOut}
        onCancel={() => setShowLogoutConfirmation(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  scrollContent: {
    padding: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 24,
    color: 'white',
  },
  userDetails: {
    marginLeft: 16,
  },
  userName: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 18,
    color: '#1F2937',
  },
  userLocation: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  signInButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  signInButtonText: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
    color: 'white',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 16,
  },
  logoutText: {
    marginLeft: 12,
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
    color: '#EF4444',
  },
  versionText: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 32,
  },
});