import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Text>Home1</Text>
    </View>
  );
};

export default Home;

// export default function() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       {/* Use the `Screen` component to configure the layout. */}
//       <Stack.Screen options={{ title: "Overview" }} />
//       {/* Use the `Link` component to enable optimized client-side routing. */}
//       <Link href="/details">Go to Details</Link>
//     </View>
//   );
// }