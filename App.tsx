import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './src/routes/AppTabs';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import FeedbackToast from './src/common/FeedbackToast';

function App(): JSX.Element {
  React.useEffect(() => {
    const splashTimeout = setTimeout(() => {
      SplashScreen.hide(); //hides the splash screen on app load (after 1 second).
    }, 1000);
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <StatusBar />
          <AppTabs />
        </SafeAreaView>
      </NavigationContainer>
      <FeedbackToast />
    </Provider>
  );
}

export default App;