

import FetchOperation from "../helpers/fetchOperation";

export const createNote = async (note) => {

    const newNote = await new FetchOperation()
                                .POST()
                                .withBody(note)
                                .withJSONHeaders()
                                .getResponse("http://localhost:3005/notes")
    
    return newNote
}

export const updateNote = async (note) => {

    const updatedNote = await new FetchOperation()
                                    .PUT()
                                    .withBody(note)
                                    .withJSONHeaders()
                                    .getResponse(`http://localhost:3005/notes/${note.id}`)
                                    
    console.log(updatedNote, "updatedNote")

    return updatedNote
    
}

export const deleteNote = async (id) => {

    const deletedNote = await new FetchOperation()
                                    .DELETE()
                                    .getResponse(`http://localhost:3005/notes/${id}`)
    console.log(deletedNote)
}

export const patchNote = async (id, field ) => {

    const patchedNote = await new FetchOperation()
                                    .PATCH()
                                    .withBody(field)
                                    .withJSONHeaders()
                                    .getResponse(`http://localhost:3005/notes/${id}`)

    console.log(patchedNote, "services patchedNote")
}
