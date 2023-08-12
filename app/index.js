import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";

import { images, icons, COLORS, FONT, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  PrivacyOverlay,
} from "../components";
import useEffectOnce from "../hook/useEffectOnce";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffectOnce(() => {
    console.log("222");
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>

      {/* Privacy Overlay */}
      <PrivacyOverlay />
    </SafeAreaView>
  );
};

export default Home;
