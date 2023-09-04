import * as yup from "yup"

const getFormFields = (options) => [
    { name: "date", label: "Date", type: "date" },
    {
        name: "visits",
        label: "Visits",
        type: "select",

        options: options.map((option) => ({
            label: option.name,
            value: option._id,
        })),
        multiple: true,
        placeholder: "Elige visitas",
    },
]

const validationSchema = yup.object().shape({
    // date: yup
    //     .date()
    //     .default(() => new Date())
    //     .required("El campo es requerido"),
})

export { getFormFields, validationSchema }
