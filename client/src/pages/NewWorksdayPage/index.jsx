import * as React from 'react'
import { Stack, Typography } from '@mui/material'
import Form from '../../components/Form'

import { getFormFields, validationSchema } from './form-fields'
import {useCustomers} from "../../hooks"
import workdayService from '../../services/workday-service'

function NewWorkdayPage() {
	const {customers} = useCustomers()
	const onSubmit = (data) => {


		console.log(data)

		// for (const pair of data.entries()) {
		// 	console.log(pair)
		// }


		workdayService.create(data)
			.then(console.log)
			.catch(console.log)
	}
	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="New Workday"
					buttonLabel="Add Workday"
					formFields={getFormFields(customers)}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					defaultValues={{date: new Date().toISOString().split("T")[0]}}
					customers={customers}
				/>
			</Stack>
		</Stack>
	)
}
export default NewWorkdayPage
