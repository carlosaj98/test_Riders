import _ from "lodash"

const transformData = (form) => {

    let hasFile = false

    const formData = new FormData()
console.log(form )
    for (let field in form) {
    
        if (form[field] instanceof File) {
                hasFile = true
            formData.append(field, form[field], form[field].name)
        } else if (form[field] instanceof Date) {
            console.log(form[field].toISOString().split("T")[0])
            formData.append(field, form[field].toISOString().split("T")[0])
        } else if (_.isArray(form[field])) {
            form[field].forEach((value) => formData.append(`${field}[]`, value))
        } else if (_.isObject(form[field])) {
            formData.append(field, form[field].value)
        } else {
            if (form[field]) formData.append(field, form[field])
        }
    }

        console.log('---------------------------')
        console.log(formData.entries())
		for (const pair in formData.entries()) {
			console.log(pair)
		}
        console.log('---------------------------')
    
    return  (hasFile) ? formData : form
}

export { transformData }
