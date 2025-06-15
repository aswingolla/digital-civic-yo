import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, ActivityIndicator, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { ArrowLeft } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [step, setStep] = useState<'email' | 'postcode'>('email');
  const [loading, setLoading] = useState(false);
  
  const handleContinue = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    try {
      // In a real app, this would validate the email with an API
      setTimeout(() => {
        setLoading(false);
        setStep('postcode');
      }, 1000);
    } catch (error) {
      setLoading(false);
      alert('Failed to verify email. Please try again.');
    }
  };
  
  const handleVerify = async () => {
    if (!postcode || postcode.length < 4) {
      alert('Please enter a valid postcode');
      return;
    }
    
    setLoading(true);
    try {
      // In a real app, this would verify credentials with an API
      await signIn({ 
        email,
        password: 'dummy' // This would be handled properly in a real app
      });
      
      router.replace('/(tabs)');
    } catch (error) {
      setLoading(false);
      alert('Invalid credentials. Please try again.');
    }
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => step === 'postcode' ? setStep('email') : router.back()}
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="#1F2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {step === 'email' ? 'Sign In' : 'Complete Your Profile'}
          </Text>
        </View>
        
        <View style={styles.content}>
          {step === 'email' ? (
            <>
              <Text style={styles.description}>
                Enter your email address to sign in or create a new account.
              </Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="you@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoFocus
                />
              </View>
              
              <TouchableOpacity 
                style={[styles.button, (!email || loading) && styles.buttonDisabled]}
                onPress={handleContinue}
                disabled={!email || loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={styles.buttonText}>Continue</Text>
                )}
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.description}>
                To verify your location and show relevant content, please enter your postcode. You can also add your mobile number for additional features.
              </Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Postcode<Text style={styles.requiredStar}>*</Text></Text>
                <TextInput
                  style={[styles.input, styles.postcodeInput]}
                  value={postcode}
                  onChangeText={setPostcode}
                  placeholder="Enter your postcode"
                  autoCapitalize="characters"
                  autoFocus
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Mobile Number <Text style={styles.optional}>(optional)</Text></Text>
                <TextInput
                  style={styles.input}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  placeholder="Enter your mobile number"
                  keyboardType="phone-pad"
                />
                <Text style={styles.helperText}>
                  Add your mobile number to receive important updates and notifications
                </Text>
              </View>
              
              <TouchableOpacity 
                style={[styles.button, (!postcode || loading) && styles.buttonDisabled]}
                onPress={handleVerify}
                disabled={!postcode || loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={styles.buttonText}>Sign In</Text>
                )}
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our{' '}
          <Text style={styles.footerLink}>Terms of Service</Text> and{' '}
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 16,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1F2937',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
  },
  requiredStar: {
    color: '#EF4444',
  },
  optional: {
    color: '#6B7280',
    fontSize: 12,
  },
  input: {
    height: 56,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
  },
  postcodeInput: {
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  helperText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 6,
  },
  button: {
    backgroundColor: '#3B82F6',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: '#BFDBFE',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
  },
  footer: {
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    backgroundColor: '#FFFFFF',
  },
  footerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  footerLink: {
    color: '#3B82F6',
    fontFamily: 'Inter-Medium',
  },
});