import { View, Text } from 'react-native';
import { userRouter } from 'expo-router';

export default function() {
  return (
    <View>
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API
          router.back();
        }}
      >
        Details Screen
      </Text>
    </View>
  );
}