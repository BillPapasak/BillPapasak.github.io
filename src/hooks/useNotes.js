import { useContext, useEffect, useState } from "react"
import { NoteContext } from "../context/NoteContext"


export const useNotes = (category) => {

    const response = useContext(NoteContext)
    const [data, setData] = useState(response.data ?? null)


    const doneNotes = () => data?.filter(note => note.checked === true)

    useEffect(() => {

        if (category) {
            setData(response.data?.filter(data => data.category === category.toLowerCase()))
        }
    }, [response.data, category])
    //console.log(response)
    return {

        ...response, 
        filteredData: data,
        doneNotes
    }
}