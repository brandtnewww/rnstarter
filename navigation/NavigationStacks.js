import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../screens'

/**
 * RootStack
 */

const RootStack = createNativeStackNavigator()

export default function RootStackScreen() {
	return (
		<RootStack.Navigator initialRouteName="Home">
			<RootStack.Screen name="Home" component={HomeScreen} />
		</RootStack.Navigator>
	)
}
