import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { store } from './data/store'
import Navigation from './navigation/Navigation'

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
		</Provider>
	)
}
