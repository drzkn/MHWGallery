import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export default function App() {

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Text>Monster hunter world Gallery</Text>
          <StatusBar style="auto" />
        </View>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
