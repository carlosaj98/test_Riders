import { useEffect, useState } from 'react'
import customerService from '../services/customer-service'

function useCustomer(customerID) {
	const [customer, setCustomer] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		customerService
			.getById(customerID)
			.then(({ data }) => setCustomer(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [customerID])

	return { customer, loading, errors, setCustomer }
}

export default useCustomer
