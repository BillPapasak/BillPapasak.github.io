import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";


export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {

    const response = useFetch('http://localhost:3005/notes')
    console.log(response)
    return (

        <NoteContext.Provider value={response}>
            { children }
        </NoteContext.Provider>
    )
}

export default NoteContextProvider