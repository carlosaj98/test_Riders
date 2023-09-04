const cloudinary = require('../utils/cloudinary')

const { Customer } = require('../models/customer')

const getAll = async (req, res) => {
	const customers = await Customer.find()
	res.json(customers)
}

const getOne = async (req, res) => {
	const { customerId } = req.params

	const customer = await Customer.findById(customerId)
	if (!customer) {
		return res.status(404).json({ message: 'Cliente no encontrado' })
	}

	res.json(customer)
}

const create = async (req, res) => {
	const { path: logo, filename: logoCloudinaryId } = req.file

	const newCustomer = await Customer.create({
		...req.body,
		logo,
		logoCloudinaryId,
	})
	res.json(newCustomer)
}

const update = async (req, res) => {
	if (!req.file) req.file = {}
	const { path: logo, filename: logoCloudinaryId } = req.file
	const { customerId } = req.params

	const updates = { ...req.body, logo, logoCloudinaryId }
	const oldCustomer = await Customer.findByIdAndUpdate(customerId, updates)
	if (!oldCustomer) {
		return res.status(404).json({ message: 'Cliente no encontrado' })
	}
	const updatedCustomer = { customerId, ...updates }
	await cloudinary.uploader.destroy(oldCustomer.logoCloudinaryId, {
		invalidate: true,
	})
	res.json(updatedCustomer)
}

const deleteOne = async (req, res) => {
	const { customerId } = req.params
	const deletedCustomer = await Customer.findByIdAndDelete(customerId)
	if (!deletedCustomer) {
		return res.status(404).json({ message: 'Cliente no encontrado' })
	}
	await cloudinary.uploader.destroy(deletedCustomer.logoCloudinaryId, {
		invalidate: true,
	})
	res.json(deletedCustomer)
}

module.exports = { getAll, getOne, create, update, deleteOne }
