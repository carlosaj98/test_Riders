import { useEffect, useState } from 'react'
import workdayService from '../services/workday-service'

function useWorkday(workdayID) {
	const [workday, setWorkday] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		workdayService
			.getById(workdayID)
			.then(({ data }) => setWorkday(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [workdayID])

	return { workday, loading, errors, setWorkday }
}

export default useWorkday