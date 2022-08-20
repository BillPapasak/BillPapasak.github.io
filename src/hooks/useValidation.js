import { useInput } from "./useInput"
import { useEffect, useState } from "react"

export const useValidation = (initialState, validationRules={}, errorMessages={}) => {

    const [errors, setErrors] = useState({})
    const input = useInput(initialState)

    const handleError = (e, name) => {

        input.handleChange(e, name)
        console.log(e, name,  validationRules[name])
        validationRules[name]?.(e.target.value) ? setErrors(currentErrors => ({...currentErrors, [name]: null}))
                                : setErrors(currentErrors => ({...currentErrors, [name]: errorMessages[name]}))

    }

    return {
        
        errors,
        input:{
            ...input,
            state:(name) => ({
                name,
                value:input.value[name],
                onChange: (e) => { 
                    console.log(typeof e)
                    handleError(e, name)
                }
            })

        }
    }


}