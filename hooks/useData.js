import { useDispatch, useSelector } from 'react-redux'

import { setOnboardingDone } from '../data/features/featureAccessSlice'

export default function useData() {
	const dispatch = useDispatch()
	const featureAccess = useSelector(state => state.featureAccess)

	const setOnboardingDoneAction = onboardingDone => {
		dispatch(setOnboardingDone(onboardingDone))
	}

	return { setOnboardingDoneAction, featureAccess }
}
