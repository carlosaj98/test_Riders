import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import CustomersPage from './pages/CustomersPage'
import NewWorkdayPage from './pages/NewWorksdayPage'
import NewCustomerPage from './pages/NewCustomerPage'
import EditCustomerPage from "./pages/EditCustomerPage"

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/workday/new',
				element: <NewWorkdayPage />,
			},
			{
				path: '/customer/new',
				element: <NewCustomerPage />,
			},
			{
				path: '/customers',
				element: <CustomersPage />,
			},

			{
				path: '/customer/update/:id',
				element: <EditCustomerPage />,
			},
		],
	},
])

export default router
