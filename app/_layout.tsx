import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Text, View, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { style } from '@/assets/css/style';
import { Input } from '@/components/Input';
import { DisplayTemperature } from '@/components/DisplayTemperature';
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
} from "@/utils/temperature";
import { ButtonConvert } from "@/components/ButtonConvert";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.root}>
        <ImageBackground source={require('@/assets/images/hot.png')}>
          <View style={style.workspace}>
            <DisplayTemperature unit={oppositeUnit} temperature={getConvertedTemperature()} />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0} />
            <ButtonConvert
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
              unit={currentUnit}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
