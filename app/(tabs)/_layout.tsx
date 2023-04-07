import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Text } from 'react-native';

import Colors from '../../constants/Colors';
import { useZipCodeSearch } from '../../hooks/useZipCodeSearch';
import { ZipCodeSearchContext } from '../../context/ZipCodeSearchContext';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const zipCodeState = useZipCodeSearch("");

  return (
    <ZipCodeSearchContext.Provider value={zipCodeState}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Current Weather',
            tabBarIcon: ({ color }) => <TabBarIcon name="weather-partly-cloudy" color={color} />,
          }}
        />
        <Tabs.Screen
          name="hourly"
          options={{
            title: 'Hourly Forecast',
            tabBarIcon: ({ color }) => <TabBarIcon name="weather-cloudy-clock" color={color} />,
          }}
        />
      </Tabs>
    </ZipCodeSearchContext.Provider>
  );
}
