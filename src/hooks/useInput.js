import { useState } from "react"

export const useInput = (initialState={}) => {

    const [value, setValue] = useState(initialState)
    
    const handleChange = (newValue, name) => {
        
        newValue?.type === "change" ? setValue(currentValue => 
            ({...currentValue, [newValue.target.name]:newValue.target.value})) 
            : setValue(currentValue => ({...currentValue, [name]:newValue}))
    }

    return {

        value,
        setValue,
        handleChange,
        state:(name) => ({
            name,
            value:value[name],
            onChange:(e) => handleChange(e, name)

        })
    }
}