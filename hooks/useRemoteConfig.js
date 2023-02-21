// This custom hook is used to fetch remote config data from Firebase and return the values as an object.
//
// Usage:
// const { remoteValues } = useRemoteConfig()
// remoteValues will contain the fetched remote config values
//
// This hook sets default values for remote config and fetches the latest values from Firebase.
// If the app is in development mode, the fetch() method is called with a cache expiry of 0.
// Once the fetch and activate promise is resolved, the values are retrieved and set as remoteValues state.
// If any error occurs, it is tracked using the useTracking hook.
// The remoteValues state is returned as an object.

import { useEffect, useState } from 'react'

import remoteConfig from '@react-native-firebase/remote-config'

import useTracking from './useTracking'

export default function useRemoteConfig() {
	const { trackError } = useTracking()

	// State
	const [remoteValues, setRemoteValues] = useState({})

	useEffect(() => {
		const setDefaultsAndFetch = async () => {
			try {
				await remoteConfig().setDefaults({
					is_waiting_for_approval: '',
					ab_test_version: ''
				})

				if (__DEV__) {
					await remoteConfig().fetch(0)
				}

				await remoteConfig().fetchAndActivate()

				const parameters = remoteConfig().getAll()

				if (parameters) {
					const values = {}

					Object.entries(parameters).forEach(([$key, entry]) => {
						values[$key] = entry.asString()
					})

					setRemoteValues(values)
				}
			} catch (error) {
				trackError(error)
			}
		}

		setDefaultsAndFetch()
	}, [trackError, setRemoteValues])

	return {
		remoteValues
	}
}
