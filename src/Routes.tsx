import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from './Login'
import Signup from './Signup'

const Tab = createNativeStackNavigator();

const Routes = () => 
{
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Tab.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes