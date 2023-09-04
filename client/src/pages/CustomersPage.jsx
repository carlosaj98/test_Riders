import * as React from "react"
import { Link } from "react-router-dom"
import { Button, Stack, Typography, TableCell, Paper } from "@mui/material"
import { Add, Search, Edit, Delete } from "@mui/icons-material"

import { Dialog, IconButton, Table, TableRow } from "../components"
import customerService from "../services/customer-service"
import { useCustomers } from "../hooks"

function HomePage() {
    const { customers, setCustomers } = useCustomers()
	const [opennedID, setOpennedID] = React.useState("")

    const handleClickOpen = (id) => setOpennedID(id)
    const handleClose = () => setOpennedID("")

	const handleCustomerDelete = () => {
        console.log(opennedID)
		customerService.delete(opennedID)
		const realCustomers = customers.filter((customer) => customer._id !== opennedID)
		setCustomers(realCustomers)
		setOpennedID("")
    }

    return (
        <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h2" component="h2">
                    Customers
                </Typography>

                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Add />}
                    component={Link}
                    to="/customer/new"
                >
                    New Customer
                </Button>
            </Stack>

            <Table>
                {customers.map((customer) => (
                    <TableRow key={customer._id}>
                        <TableCell
                            component="th"
                            scope="row"
                            size="small"
                            width="100px"
                        >
                            <Paper
                                variant="outlined"
                                sx={{
                                    img: {
                                        height: "100px",
                                        Width: "30%",
                                        fit: "cover",
                                    },
                                }}
                            >
                                <img src={customer.logo} />
                            </Paper>
                        </TableCell>
                        <TableCell align="left" size="small">
                            {customer.name}
                        </TableCell>

                        <TableCell align="right">
                            <IconButton icon={Search} tooltip="Open customer" />
                            <Link to={`/customer/update/${customer._id}`}>
                                <IconButton
                                    color="secondary"
                                    icon={Edit}
                                    tooltip="Update customer"
                                />
                            </Link>

                            <IconButton
                                color="error"
                                onClick={() => handleClickOpen(customer._id)}
                                icon={Delete}
                                tooltip="Delete customer"
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </Table>

            <Dialog
                onClose={handleClose}
                onDelete={handleCustomerDelete}
                open={Boolean(opennedID)}
            />
        </Stack>
    )
}
export default HomePage
