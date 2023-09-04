import { Outlet } from 'react-router-dom'

import { Container, Stack } from '@mui/material'

import { Navbar } from '../components'

function RootLayout() {
	// const paddingX = useMediaQuery(theme.breakpoints.up('md')) ? '80px' : '16px'
	// const gap = useMediaQuery(theme.breakpoints.up('md')) ? '48px' : '24px'

	// const paddingX = useBreakpointValue({ base: '16px', md: '80px' })
	// const gap = useBreakpointValue({ base: '24px', md: '48px' })

	return (
		<Container display="flex" maxWidth="xxl" disableGutters>
			<Navbar />

			<Container maxWidth="xl" sx={{ mt: 5 }}>
				<Outlet />
			</Container>
		</Container>
	)
}
export default RootLayout
