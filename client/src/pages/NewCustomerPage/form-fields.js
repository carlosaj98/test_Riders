import * as yup from "yup"

const formFields = [
    { name: "name", label: "Name" },
    { name: "latitude", label: "Latitude" },
    { name: "longitude", label: "Longitude" },
    {
        name: "logo",
        label: "Logo",
        type: "file",
    },
]

const validationSchema = yup.object().shape({
    name: yup.string().required("El campo es requerido"),
    latitude: yup.number().required("El campo es requerido"),
    longitude: yup.number().required("El campo es requerido"),
})

export { formFields, validationSchema }
