import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import RootStackScreen from './NavigationStacks'

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootStackScreen />
		</NavigationContainer>
	)
}
