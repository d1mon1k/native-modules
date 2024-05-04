import React, {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CalendarModule from './src/native-modules/calendar-module.ts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : 'gray',
  };

  const onPress = useCallback(async () => {
    CalendarModule.createCalendarEvent('Name', 'Location');
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={backgroundStyle}>
        <View style={styles.placeholder} />
        <Button title={'Create Native Calendar Event'} onPress={onPress} />
        <View style={styles.placeholder} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
  },
});

export default App;
