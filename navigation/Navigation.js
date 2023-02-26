import React, { useRef } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { useDynamicLinks, useTracking } from '../hooks'
import RootStackScreen from './NavigationStacks'

export default function Navigation() {
	// Analytics
	const routeNameRef = useRef()
	const navigationRef = useRef()

	const { trackScreen } = useTracking()

	const handleOnReady = () => {
		routeNameRef.current = navigationRef.current.getCurrentRoute().name
	}

	const handleOnStageChange = async () => {
		const previousRouteName = routeNameRef.current
		const currentRouteName = navigationRef.current.getCurrentRoute().name
		if (previousRouteName !== currentRouteName) {
			await trackScreen(currentRouteName)
		}
		routeNameRef.current = currentRouteName
	}

	// Dynamic Links
	useDynamicLinks()

	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={handleOnReady}
			onStateChange={handleOnStageChange}
		>
			<RootStackScreen />
		</NavigationContainer>
	)
}
