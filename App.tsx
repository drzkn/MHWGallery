import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query'
import { Root } from './src/Root';

const queryClient = new QueryClient();

export default function App() {

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Root />
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
