import { configureStore } from '@reduxjs/toolkit'

import featureAccessReducer from './features/featureAccessSlice'

export const store = configureStore({
	reducer: {
		featureAccess: featureAccessReducer
	}
})
