import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoteIcon from '@mui/icons-material/Note';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import PopoverDescription from './PopoverDescription';

const Navbar = () => {

    const { pathname } = useLocation()

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{background:"#505050"}}>
                <Toolbar sx={{display:"flex", justifyContent:"space-between", gap:3}}>
                    <Grid container sx={{alignItems:"center", padding: ".2rem"}}>
                        <Grid item xs={10} md={3}>
                            <Typography variant="h3" component="div" sx={{flexGrow:1}}>
                                MyTodos
                            </Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <Avatar />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box sx={{display:"flex", flex:{sm:1, md:3}, gap:{xs:1, md: 6, }, justifyContent:"center"}}>
                                <NavLink
                                    to="/" 
                                    pathname={pathname}>
                                    <HomeIcon sx={{fontSize:"2.5rem", color:"#c98e8e"}}/>
                                    <PopoverDescription description="Home" />
                                </NavLink>
                                <NavLink 
                                    to="/profile" 
                                    pathname={pathname}>
                                    <AccountCircleIcon sx={{fontSize:"2.5rem", color:"#c98e8e"}}/>
                                    <PopoverDescription description="profile" />
                                </NavLink>
                                <NavLink 
                                    to="/notes" 
                                    pathname={pathname}>
                                    <NoteIcon sx={{fontSize:"2.5rem", color:"#c98e8e"}}/>
                                    <PopoverDescription description="your notes" />
                                </NavLink>
                            </Box>
                        </Grid>
                        
                    </Grid>
               </Toolbar>
            </AppBar>
        </Box>
    )

}

export default Navbar