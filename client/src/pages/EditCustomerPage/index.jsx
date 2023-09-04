import * as React from 'react'
import { useParams } from 'react-router-dom'

import { CircularProgress, Stack, Typography,  } from '@mui/material'
import Form from '../../components/Form'
import customerService from '../../services/customer-service'
import { formFields, validationSchema } from './form-fields'
import { useCustomer } from '../../hooks'

function EditCustomerPage() {
	const {id} = useParams()
	const {customer, loading} = useCustomer(id)
	console.log(customer)
	const onSubmit = (data) => {
		customerService.update(data, id)
			.then(console.log(data))
			.catch(console.log(data))
	}
	if(loading) return <CircularProgress />


	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="Edit Customer"
					buttonLabel="Edit Customer"
					formFields={formFields}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				
					defaultValues={customer}
				/>
			</Stack>
		</Stack>
	)
}
export default EditCustomerPage
