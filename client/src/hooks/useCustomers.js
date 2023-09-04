import { useEffect, useState } from 'react'
import customerService from '../services/customer-service'

function useCustomers() {
	const [customers, setCustomers] = useState([])
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		customerService
			.getAll()
			.then(({ data }) => setCustomers(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [])

	return { customers, loading, errors, setCustomers }
}

export default useCustomers
