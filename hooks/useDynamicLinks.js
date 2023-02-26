import { useEffect } from 'react'

import dynamicLinks from '@react-native-firebase/dynamic-links'

export default function useDynamicLinks() {
	// Handle incoming links
	useEffect(() => {
		const unsubscribe = dynamicLinks().onLink(handleDynamicLink)

		return () => unsubscribe()
	}, [])

	// Handle initial link
	useEffect(() => {
		dynamicLinks().getInitialLink().then(handleDynamicLink)
	}, [])

	// Handle dynamic link inside the application
	const handleDynamicLink = link => {
		if (link) {
			// Do something with the dynamic link
			//     if (link.url === 'https://invertase.io/offer') {
			//   // ...set initial route as offers screen
			// }
		}
	}
}
