import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	onboardingDone: false
}

const featureAccessSlice = createSlice({
	name: 'featureAccess',
	initialState,
	reducers: {
		setOnboardingDone(state, action) {
			state.onboardingDone = action.payload
		}
	}
})

export const { setOnboardingDone } = featureAccessSlice.actions
export default featureAccessSlice.reducer
