import { useState, useRef } from "react"
import { Typography } from "@mui/material"
import Box from "@mui/system/Box"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import { motion } from "framer-motion"
import AnimatedForm from "../Forms/AnimatedForm";
import TravelNoteForm from "../Forms/TravelNoteForm";
import { useToggle } from "../../hooks/useToggle";
import { useHumanDate } from "../../hooks/useHumanDate";
import { useNotes } from "../../hooks/useNotes";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useOffMountEffect } from "../../hooks/useOffMountEffect";
import { deleteNote, patchNote } from "../../services/noteServices";

const boxContainerStyles = {

    position:"absolute",
    borderRadius: "7px",
    top:"50%",
    left: "50%",
    transform:"translate(-50%,-50%)",
    margin: "0 auto",
    width:{xs:"70%", sm:"40%", md:"35%"},
    height:{xs:"500px", sm:"400px"},
    boxShadow: "0 0 6px black",
    minHeight: "400px",
    padding: "2rem",
    zIndex:"10000",
    backgroundColor: "white",
    
    
    
}

const detailsStyles = {

    maxHeight: "30%",
    overflow:"auto",
    wordBreak: "break-all",
    marginTop:"1rem",
    fontSize: "1.5rem",
    marginBottom:"1.5rem"
}

const dateTimeStyles = {

    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    color:"gray",
    "& > svg": {
        marginLeft: "2.5rem",
        fontSize: "1rem"
    }
}

const actionStyles = {

    display: "flex",
    padding: "2rem",
    justifyContent: "space-evenly",
    marginBottom: "0px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform:"translateX(-50%)",
    width: "70%",
    "& > svg " : {
        cursor: "pointer",
        transition: "all .3s",
    },
    "& > svg:hover " : {
        transform: "scale(1.2)",
        
    }

}

const boxContainerVariants = {
    hidden: {

        y:"30vh",
        x: "-50%",
        opacity: 0
    },

    visible: {

        y: "-29vh",
        x: "-50%",
        opacity: 1,
        zIndex: "1000",
        transition: { type: "spring", duration: 2,delay: .2, stiffness: 60,
                    opacity: {duration: .5}
                    }
    },

    exit: {

        y: "20vh",
        opacity: 0,
        transition: { type: "spring", duration: 1.5}
    }
}



const NoteDetails = ({ closeForm, note, noteDetailsToggled }) => {


    const noteDetailsRef = useRef()
    const editPage = useToggle()
    const checkNote = useToggle(note.checked)
    const { category } = useParams()
    const { data:notes, setData:setNotes } = useNotes(category)
    const { ref } = useOffMountEffect({
        callback: () => setNotes(currentNotes => currentNotes
            .map(currentNote => currentNote.id === note.id ? ({...currentNote, checked:checkNote.toggled}) 
                                                            : currentNote)),
        dependencies: [checkNote.toggled],
        cleanupFunc : () => {
            if (noteDetailsRef.current === null && checkNote.toggled !== note.checked) {
                patchNote(note.id, {checked: checkNote.toggled})
            }
        }
    })

    const { date, time } = useHumanDate()

    const showEditPage = () => editPage.show()
    const doneNote = () => {
        
        ref.current = true
        checkNote.show()
    }
    const undoneNote = () => {

        ref.current = true
        checkNote.hide()
    }   

    const removeNote = () => {

        setNotes(currentNotes => currentNotes.filter(currentNote => currentNote.id !== note.id))
        deleteNote(note.id)
        closeForm()
    }
    
    return (
        <AnimatedForm>
            <Box 
                sx={{...boxContainerStyles}}
                ref={noteDetailsRef}
            >
            
                <IconButton 
                    sx={{position:"absolute", top:0, right:0 }}
                    onClick={closeForm}>
                    <CloseIcon />
                </IconButton>
                <Typography mb="2">
                    { note.title }
                </Typography>
                <Box 
                    sx={{...detailsStyles}} >
                        { note.details }
                </Box>

                <Box 
                    sx={{...detailsStyles}} >
                        { note.destination }
                </Box>
                <Box
                    sx={{...dateTimeStyles}}>
                    { date(new Date(JSON.parse(note.date))) }
                    <CalendarMonthIcon  />
                </Box>
                <Box
                    sx={{...dateTimeStyles}}>
                    { time(new Date(JSON.parse(note.time))) }
                    <ScheduleIcon  />
                </Box>
                <Box 
                    sx={{...actionStyles}}>
                    <EditIcon onClick={showEditPage} />
                    {
                        note.checked ? <RemoveDoneIcon onClick={undoneNote} />
                                    : <TaskAltIcon onClick={doneNote} />
                    }
                    <RemoveIcon onClick={removeNote} />
                    
                    
                </Box>
                { 
                    editPage.toggled && 
                    <Box sx={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}>
                        <TravelNoteForm oldNote={note} closeForm={closeForm} />
                    </Box> 
                }
            </Box>

            

        </AnimatedForm>
    )
    
}

export default NoteDetails