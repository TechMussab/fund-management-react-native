import HomeScreen from "../HomeScreen/HomeScreen";
import { Ionicons } from '@expo/vector-icons';
import  SettingsScreen  from "../SettingsScreen/SettingsScreen";
const screens = [
    {
      name: 'Home',
      component: HomeScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      },
    },
    {
      name: 'Settings',
      component: SettingsScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" color={color} size={size} />
        ),
      },
    },
  ];

  export default screens;