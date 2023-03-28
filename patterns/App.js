import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import BottomNav from './src/components/bottomNav';
import Dashboard from './src/screens/dashboard';
import LoginPage from './src/screens/login';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
        <BottomNav />
    </SafeAreaProvider>
  );
}
export default App;
