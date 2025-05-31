# Digital Civic YO! 🏙️

A community-driven platform for local insights, ratings, and civic engagement. Built with Expo and React Native.

## 🌟 Features

- **Community Insights**: Rate and review local businesses, services, and civic facilities
- **Interactive Map**: Explore your neighborhood with our interactive map interface
- **Community Pulse**: Track trending locations and community sentiment
- **Real-time Updates**: Stay informed with notifications about your area
- **Cross-platform**: Available on Web, iOS, and Android

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or newer
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/digital-civic-yo.git
   cd digital-civic-yo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Development Platforms

- **Web**: `npm run dev:web`
- **iOS/Android**: `npm run dev` (requires Expo Go app)

## 📱 Platform Support

- Web (Primary Platform)
- iOS (via Expo)
- Android (via Expo)

## 🛠️ Built With

- [Expo](https://expo.dev/) - Development Framework
- [React Native](https://reactnative.dev/) - Mobile Framework
- [Expo Router](https://docs.expo.dev/router/introduction/) - Navigation
- [Supabase](https://supabase.com/) - Backend & Authentication

## 📦 Project Structure

```
digital-civic-yo/
├── app/                 # Application routes
│   ├── (tabs)/         # Tab-based navigation
│   └── api/            # API routes
├── components/         # Reusable components
├── context/           # React Context providers
├── hooks/             # Custom React hooks
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
EXPO_PUBLIC_API_URL=your_api_url
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:quality
npm run test:ui
npm run test:e2e
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@digitalcivicyo.com or join our Slack community.