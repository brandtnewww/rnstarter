import { useEffect, useState } from 'react'

import auth from '@react-native-firebase/auth'

import useTracking from './useTracking'

// A custom hook to handle authentication
export default function useAuthentication() {
	const { trackError, trackEvent } = useTracking()

	// State
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	// Effect hook to subscribe to authentication state changes
	useEffect(() => {
		// Function to handle user state changes
		const onAuthStateChanged = user => {
			// Update user state
			setUser(user)
			// If loading state is still true, update it to false
			if (loading) {
				setLoading(false)
			}
		}
		// Subscribe to authentication state changes
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged)

		// Sign in anonymously if no user is currently authenticated
		if (!user) {
			auth()
				.signInAnonymously()
				.then(() => {
					trackEvent('sign_in_anonymously')
				})
				.catch(error => {
					trackError(error)
				})
		}

		// Unsubscribe on unmount
		return () => subscriber()
	}, [loading, user, trackError, trackEvent])

	// Return user and loading state
	return {
		user,
		loading
	}
}
