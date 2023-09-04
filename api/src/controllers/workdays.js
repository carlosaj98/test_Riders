const { Workday } = require('../models/workday')

const getAll = async (req, res) => {
	const workdays = await Workday.find().populate('visits')
	res.json(workdays)
}

const getOne = async (req, res) => {
	const { workdayId } = req.params
	const workday = await Workday.findById(workdayId).populate('visits')
	if (!workday) {
		return res.status(404).json({ message: 'Workday no encontrado' })
	}
	res.json(workday)
}

const create = async (req, res) => {
	const { date, visits } = req.body
	const newWorkday = await Workday.create({ date, visits })

	res.json(newWorkday)
}

const update = async (req, res) => {
	const { workdayId } = req.params
	const updates = req.body
	const updatedWorkday = await Workday.findByIdAndUpdate(workdayId, updates, {
		new: true,
	})
	if (!updatedWorkday) {
		return res.status(404).json({ message: 'Workday no encontrado' })
	}
	res.json(updatedWorkday)
}

const deleteOne = async (req, res) => {
	const { workdayId } = req.params
	const deletedWorkday = await Workday.findByIdAndDelete(workdayId)
	if (!deletedWorkday) {
		return res.status(404).json({ message: 'Workday no encontrado' })
	}
	res.json(deletedWorkday)
}

module.exports = { getAll, getOne, create, update, deleteOne }
