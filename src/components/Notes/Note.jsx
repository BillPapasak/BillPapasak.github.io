import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Icon from '@mui/material/Icon';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useToggle } from "../../hooks/useToggle";
import NoteDetails from "./NoteDetails";
import BlanckPage from "../shared/BlanckPage"
import { memo } from "react";
import { AnimatePresence } from "framer-motion";
import { useHumanDate } from "../../hooks/useHumanDate";
import { useNotes } from "../../hooks/useNotes";
import CheckNote from "./CheckNote";
import { motion } from "framer-motion"
import ToggledComponent from "../shared/ToggledComponent";

const noteVariants = {

    exit: {

        opacity:0,
        x: "-100vh",
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}
const Note = memo(({ blanckPage, note }) => {

    const noteDetails = useToggle()
    const { date, time } = useHumanDate()
    const { setData: setNotes } = useNotes()
    
    const showNoteDetails = (e) => {
        
            blanckPage.show()
            noteDetails.show()
        
    }

    const closeNoteDetails = () => {

        blanckPage.hide()
        noteDetails.hide()
    }

    /*
    const removeNote = (e) => {

        console.log(e)
        e.stopPropagation()
        setNotes(currentNotes => currentNotes.filter(currentNote => currentNote.id !== note.id))
    }
*/
    return (

        <AnimatePresence>
            <Grid item component={motion.div}
                    variants={noteVariants}
                    key={note.id}
                    exit="exit">
                <Box 
                    className="note-wrapper"
                    onClick={showNoteDetails}
                    >
                    <Box className="note-info">
                        <Typography variant="h5">{ note.title.slice(0,7) }...</Typography>
                        <Box display="flex" gap="10px" alignItems="center">
                            <Typography variant="h8" color="secondary">{ date(new Date(JSON.parse(note.date))) }</Typography>
                            <Typography variant="h8" color="secondary">{ time(new Date(JSON.parse(note.time))) }</Typography>
                            <AccessAlarmIcon fontSize="10px" />
                        </Box>
                        
                    </Box>
                    <Box className="note-check">
                        <Icon> { note.tag } </Icon>
                    </Box>
                    {
                        note.checked && <CheckNote />
                    }
                </Box>
            </Grid>
            <AnimatePresence>
                <ToggledComponent toggled={noteDetails.toggled}>
                    <NoteDetails 
                        closeForm={closeNoteDetails}
                        noteDetailsToggled={noteDetails.toggled}
                        note={note} />
                </ToggledComponent>
                
            </AnimatePresence>
        </AnimatePresence>
        
    )
})

export default Note