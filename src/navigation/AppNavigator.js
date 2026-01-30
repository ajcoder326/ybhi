import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountDetailsScreen from '../screens/AccountDetailsScreen';
import ManageAccountsScreen from '../screens/ManageAccountsScreen';
import AccountSummaryScreen from '../screens/AccountSummaryScreen';
import TransactionsScreen from '../screens/TransactionsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigator (Home and other tabs)
const MainTabs = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AccountDetails" component={AccountDetailsScreen} />
            <Stack.Screen name="ManageAccounts" component={ManageAccountsScreen} />
            <Stack.Screen name="AccountSummary" component={AccountSummaryScreen} />
            <Stack.Screen name="Transactions" component={TransactionsScreen} />
        </Stack.Navigator>
    );
};

// Root Navigator
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
