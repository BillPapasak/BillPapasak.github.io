import { Box, Button } from "@mui/material"
import Grid from "@mui/material/Grid"
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";
import { createNote, updateNote } from "../../services/noteServices";
import "./form.css"
import { useNotes } from "../../hooks/useNotes";
import { useToggle } from "../../hooks/useToggle";
import FormIconList from "./FormIconList";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AnimatePresence } from "framer-motion";
import { useHumanDate } from "../../hooks/useHumanDate";
import { useInput } from "../../hooks/useInput";
import { useValidation } from "../../hooks/useValidation";
import AnimatedForm from "./AnimatedForm";
import FormImage from "./FormImage";

const defaultValidationRules = {
    title: (title) => title.length < 20 
}

const defaultErrorMessages={ 
    title: "Title must have less that 20 characters"
}


const MainForm = ({ 
                    oldNote, 
                    category,
                    closeForm, 
                    fields={}, 
                    icons,
                    validationRules={},
                    errorMessages={},
                    children }) => {

    const { errors, input:{ value:note, setValue, state } } = useValidation({
            title:oldNote?.title ?? "",
            details:oldNote?.details ?? "",
            date: oldNote ? new Date(JSON.parse(oldNote?.date)) : new Date(),
            time: oldNote ? new Date(JSON.parse(oldNote?.time)) : null,
            tag: oldNote?.tag ?? "flight",
            checked: false,
            category,
            ...fields
        },
        {...defaultValidationRules, ...validationRules},
        {...defaultErrorMessages, ...errorMessages}
    )

    const format = useHumanDate()
    const formIconList = useToggle()
    const { data, setData } = useNotes()

    const handleTag = tag => setValue(currentValue => ({...currentValue, tag}))

    const handleSubmit = (e) => {
        
        e.preventDefault()

        const formatedNote = { 
                                ...note ,
                                date: JSON.stringify(note.date.toJSON() ?? null), 
                                time: JSON.stringify(note.time?.toJSON() ?? null) 
                            }
        if (oldNote) {
        
            setData(currentNotes => 
                        [
                            ...currentNotes.filter(currentNote => currentNote.id !== oldNote.id), 
                            {...formatedNote, id: oldNote.id}
                        ])

            updateNote({...formatedNote, id: oldNote.id})
            closeForm()
        }
        else {
        
            setData(currentNotes => 
                        [
                            ...currentNotes, 
                            {...formatedNote, id: data.length > 0 ? data[data.length -1]?.id+1 : 1}
                        ])
            closeForm()
            createNote(formatedNote)
        }
        

    }
    return (
        <Grid container
                className= { oldNote ? "":"form-container"}
                sx={{width:"100%", height:"100%"}}>
                    <IconButton 
                        sx={{position:"absolute", right:0, color:{xs:!oldNote ? "white" : "black", sm:"black"}}}
                        onClick={closeForm}>
                        <CloseIcon />
                    </IconButton>

                    { !oldNote &&  
                        <Grid item xs={12} sm={6} sx={{height:{xs:"50%", sm:"100%"}}}>
                           <FormImage 
                                src="/pexels-nina-uhlíková-287240.jpg"
                                alt="travel" />
                        </Grid>
                    }
                    <Grid 
                        item 
                        xs={12} 
                        sm={oldNote ? 12 : 6 } 
                        sx={{height:{xs:oldNote ? "100%":"50%", sm:"100%"}, backgroundColor:"white"}}>
                        <Grid container sx={{height:"100%"}}>
                            <Grid item xs={9}>
                                <Box
                                    component="form"
                                    autoComplete="off"
                                    noValidate
                                    sx={{ padding: "1rem", gap:1, display:"flex", flexDirection:"column"}}
                                    onSubmit={handleSubmit}
                                >
                                    <TextField fs="1.5rem" id="standard-basic" size="medium" {...state("title")} color="secondary" label="Title" variant="standard"/>
                                    { errors["title"] && <Box> { errors["title"] } </Box> }
                                    <TextField id="standard-basic" size="large" name="details"  {...state("details")} multiline maxRows={4} color="secondary" label="Details" variant="standard"/>
                                    { children && children(state) }
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        
                                            <DatePicker
                                                views={['day', 'month', 'year']}
                                                label="Year only"
                                                {...state("date")}
                                                renderInput={(params) => <TextField {...params} id="standard-basic" color="secondary" label="Date" variant="standard" />}
                                            />
                                            <TimePicker
                                                label="Basic example"
                                                {...state("time")}
                                                renderInput={(params) => <TextField {...params} color="secondary" label="Time" variant="standard"/>}
                                            />
                                    </LocalizationProvider>

                                    <Box>
                                        {
                                            note.title && <Button type="submit"> {oldNote ? "Update" : "Create" } </Button>
                                        }
                                    </Box>
                                
                                </Box>
                            </Grid>
                            <Grid item xs={3} >
                                <Box sx={{display:"flex",flexDirection:"column", overflow:"hidden", alignItems:"center", mr:{sm:"1rem"}, mt:{xs: oldNote? "4rem": 0 , sm:"4rem"}}}>

                                    <IconButton sx={{mb:"1rem"}} onClick={formIconList.toggle}>
                                        { formIconList.toggled ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon /> }
                                    </IconButton>
                                    <AnimatePresence>
                                        { formIconList.toggled && <FormIconList iconList={icons} handleTag={handleTag} /> }
                                    </AnimatePresence>
                                </Box>     
                            </Grid>
                        </Grid>
                        
                        
                    </Grid>
            </Grid>
        
    )

}

export default MainForm