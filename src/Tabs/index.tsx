import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Main from "./Main";
import Appointments from "./Appointments";
import Explore from "./Explore";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarStyle: { backgroundColor: "#002851" },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#fff",
};

const tabs = [
  {
    name: "Main",
    component: Main,
    icon: "home",
  },
  {
    name: "Appointments",
    component: Appointments,
    icon: "calendar",
  },
  {
    name: "Explore",
    component: Explore,
    icon: "search",
  },
  {
    name: "Profile",
    component: Profile,
    icon: "person",
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
