import Carousel from "react-material-ui-carousel"
import CentralizedBox from "../../components/shared/CentralizedBox"
import { Paper, Button, Box } from '@mui/material'
import { useState } from "react"
import FormSelection from "../../components/Forms/FormSelection"
import { AnimatePresence } from "framer-motion"
import CreateTodoButton from "../../components/CreateTodoButton/CreateTodoButton"
import Header from "../../components/shared/Header"

const Home = ({ blanckPage }) => {

    const [showForm, setShowForm] = useState(false)
    const [formType, setFormType] = useState("Travel")
    console.log(formType)
    const onClick = (formType) => {
        setFormType("Travel")
        setShowForm(true)
    }


    var items = [
        {
           src: "/pexels-oleksandr-pidvalnyi-3278215-Cropped.jpg",
           description: "Create Travel Notes", 
           category: "Travel",
           title: "Create Now"
        },
        {
            src: "/pexels-victor-freitas-744780.jpg",
            description: "Create Food Notes", 
            category: "Food",
            title: "Create Now"
        }
    ]

    return (
        <>

            <Box
                sx={{position:"relative", width:"100vw", height:"100vh"}}>
                <Carousel 
                    sx={{ width:"100%", height:"100%"}}
                    navButtonsAlwaysVisible="true"
                    navButtonsWrapperProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                        style: {
                        zIndex:"5"
                        }
                    }} >
                    {
                        items.map( (item, i) => <Item 
                                                    onClick={onClick}
                                                    key={i} 
                                                    item={item} /> )
                    }
                </Carousel>
                {/*
                <Box
                    sx={{zIndex: "2", position:"absolute", top: 0, left: 0, height: "100%", width:"100%", background:"rgba(0,0,0,.33)"}}>

                </Box>
                */}
                <AnimatePresence>
                    { 
                        showForm && <FormSelection 
                                        blanckPage={blanckPage}
                                        formType={formType} 
                                        setShowForm={setShowForm} 
                                        y="12vh"/> 
                    }
                </AnimatePresence>

            </Box>
            
        </>
    )
}

function Item({onClick, item})
{
    console.log(item)
    return (
        <>
            <Box
                sx={{height: "100vh", backgroundSize: "cover !important", background: `url(${item.src}) center`}}>
            </Box>
            <Paper
                sx={{padding: "2rem", fontWeight: "bold", zIndex: "3", fontSize: "2.6rem", boxShadow: "none", background: "transparent", top: 0, position: "absolute" , height: "100px", width: "100px"}}>
                { item.description }
            </Paper>
            
            <CentralizedBox style={{zIndex: "6", height: "30px", top: "67%"}}>
                <Header title={item.title} />
                <CreateTodoButton  onClick={() => onClick(item.category)} />
            </CentralizedBox>

        </>
       
    )
}



export default Home