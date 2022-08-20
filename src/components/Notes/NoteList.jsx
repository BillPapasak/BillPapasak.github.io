import { useNotes } from "../../hooks/useNotes"
import { useParams } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Note from "./Note"
import "./notes.css"
import { Typography } from "@mui/material"
import { memo, useCallback } from "react"

const plural = (length) => length === 1 ? `1 pending Note` : ` ${length} pending Notes`

const NoteList = memo(({blanckPage}) => {

    const { category } = useParams()
    const { filteredData, doneNotes, isLoading } = useNotes(category)
    const pendingNotes = filteredData?.length - doneNotes()?.length
    console.log(doneNotes())
    
    return (
        
        <>
            <Box mb="1rem">
                <Typography variant="h2" align="center"> { category.toUpperCase() } </Typography>
                {
                    pendingNotes > 0 ? 
                                <Typography
                                    variant="h5" 
                                    align="center" 
                                    mt="-24px" 
                                    color="secondary"> 
                                    { plural(pendingNotes) }
                                </Typography>
                        
                        :   <Typography 
                                variant="h5" 
                                align="center" 
                                mt="-24px" 
                                color="secondary"> 
                               No pending notes
                            </Typography>
                }
            </Box>
            
            <Box className="notes-wrapper">
                <Grid 
                    container 
                    spacing={2} 
                    justifyContent="center" 
                    sx={{padding:"2rem"}}>
                    {
                        filteredData?.map(note => <Note 
                                                    key={note.id} 
                                                    blanckPage={blanckPage}  
                                                    note={note} />)

                    }
                </Grid>
            </Box>
           
        </>
    )
})

export default NoteList