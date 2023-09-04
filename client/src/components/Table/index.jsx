import {
	Table as TableMUI,
	TableBody,
	TableContainer,
	TableRow as TableRowMUI,
	Paper,
} from '@mui/material'

function Table({ children }) {
	return (
		<TableContainer component={Paper}>
			<TableMUI sx={{ minWidth: 375 }}>
				<TableBody>{children}</TableBody>
			</TableMUI>
		</TableContainer>
	)
}

function TableRow({ children }) {
	return (
		<TableRowMUI
			hover
			sx={{
				'&:last-child td, &:last-child th': { border: 0 },
				textDecoration: 'none',
			}}
		>
			{children}
		</TableRowMUI>
	)
}
export { Table, TableRow }
