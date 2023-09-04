const mongoose = require('mongoose')
const { body } = require('express-validator')
const createUploader = require('../utils/multer')

const customerSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	latitude: { type: String, required: true },
	longitude: { type: String, required: true },
	logo: { type: String, required: true },
	logoCloudinaryId: { type: String, required: true },
})

const Customer = mongoose.model('Customer', customerSchema)

const LOGO_TYPES = {
	'image/jpeg': 'jpg',
	'image/jpg': 'jpg',
	'image/png': 'png',
}

const validateLogo = (type) => LOGO_TYPES[type]

const customerUpdateValidationSchema = [
	body('name')
		.notEmpty()
		.withMessage('El nombre es obligatorio')
		.custom(async (name, { req }) => {
			const filter = { name }

			if (req.params.customerId) {
				filter['_id'] = { $ne: req.params.customerId }
			}

			const customer = await Customer.findOne(filter)
			if (customer) throw new Error('Ya hay un cliente con ese nombre')
		}),
	body('latitude').isNumeric(),
	body('longitude').isNumeric(),
]

const customerValidationSchema = [
	...customerUpdateValidationSchema,
	body('logo')
		.custom((_, { req }) => req.file)
		.withMessage('El logo es obligatorio')
		.custom((_, { req }) => validateLogo(req.file.mimetype))
		.withMessage(
			'El logo debe estar en uno de los formatos permitidos ' +
				Object.values(LOGO_TYPES).join('/')
		),
]

exports.Customer = Customer
exports.upload = createUploader(validateLogo)
exports.customerValidationSchema = customerValidationSchema
exports.customerUpdateValidationSchema = customerUpdateValidationSchema
