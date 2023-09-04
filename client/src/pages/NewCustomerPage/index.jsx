import * as React from 'react'

import { Stack, Typography } from '@mui/material'
import Form from '../../components/Form'
import customerService from '../../services/customer-service'
import { formFields, validationSchema } from './form-fields'

function NewCustomerPage() {
	const onSubmit = (data) => {
		customerService.create(data)
			.then(console.log(data))
			.catch(console.log(data))
	}
	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="New Customer"
					buttonLabel="Add Customer"
					formFields={formFields}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default NewCustomerPage
