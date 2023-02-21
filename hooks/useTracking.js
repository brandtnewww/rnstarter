import { useEffect } from 'react'

// TODO: Uncomment the following lines to enable analytics and crashlytics

// import analytics from '@react-native-firebase/analytics'
// import crashlytics from '@react-native-firebase/crashlytics'

// A hook to track errors and events
export default function useTracking() {
	// Enable analytics and crashlytics
	useEffect(() => {
		if (__DEV__) {
			console.log('Analytics disabled in dev mode')
		} else {
			// Enable analytics collection
			// analytics().setAnalyticsCollectionEnabled(true)
			// Enable crashlytics collection
			// crashlytics().setCrashlyticsCollectionEnabled(true)
		}
	}, [])

	// Track an error
	const trackError = error => {
		if (__DEV__) {
			console.log(error)
		} else {
			// crashlytics().recordError(error)
		}
	}

	// Track an event
	const trackEvent = (name, params) => {
		try {
			if (__DEV__) {
				console.log(name, params)
			} else {
				// crashlytics().log(name, params)
				// analytics().logEvent(name, params)
			}
		} catch (error) {
			trackError(error)
		}
	}

	// Set user id for analytics and crashlytics
	const setUserId = userId => {
		try {
			if (__DEV__) {
				console.log(userId)
			} else {
				// crashlytics().setUserId(userId)
				// analytics().setUserId(userId)
			}
		} catch (error) {
			trackError(error)
		}
	}

	// Set user properties for analytics
	const setUserProperties = properties => {
		try {
			const sanitizedProperties = {}
			for (const key in properties) {
				if (Object.prototype.hasOwnProperty.call(properties, key)) {
					sanitizedProperties[key] =
						properties[key] !== undefined ? properties[key] : null
				}
			}

			if (__DEV__) {
				console.log(sanitizedProperties)
			} else {
				// analytics().setUserProperties(sanitizedProperties)
			}
		} catch (error) {
			trackError(error)
		}
	}

	return { trackError, trackEvent, setUserId, setUserProperties }
}
