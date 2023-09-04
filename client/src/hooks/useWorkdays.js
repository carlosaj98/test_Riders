import { useEffect, useState } from 'react'
import workdayService from '../services/workday-service'

function useWorkdays() {
	const [workdays, setWorkdays] = useState([])
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		workdayService
			.getAll()
			.then(({ data }) => setWorkdays(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [])

	return { workdays, loading, errors, setWorkdays }
}

export default useWorkdays