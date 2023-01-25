import useAxios from '@/requests/useAxios'
import type { axiosState } from '@/requests/useAxios'

const getFriends = async (dataState: axiosState) => {

	dataState.loading = true
	const { response, loading, error } = await useAxios(
		'get',
		'/users/friends/'
	)
	if (error.value)
		dataState.error = error.value
	else {
		dataState.loading = loading.value
		return response.value
	}
}

export default getFriends