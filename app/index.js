import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';

import { images, icons, COLORS, FONT, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text style={{ color: COLORS.tertiary }}>Home</Text>
      <Stack.Screen
        options={{ 
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
         }}
      />
    </SafeAreaView>
  );
};

export default Home;