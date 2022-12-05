import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './navbar.css'


function Navbar() {
    return (
        <>
            <AppBar position="static" className='gradiente central' >
                <Toolbar variant="dense">

                    <Box className='cursor' >
                        <img className='sizeIcon' src="https://copag.com.br/images/logo-big-menu.png" alt="" />
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Criar Tema
                            </Typography>
                        </Box>
                        <Grid className='central ml sizeIcon'>
                        <Box mx={1} className='cursor'>

                            <Link to='/login' className='text-decorator-none cursor'>
                                <a href="/" rel="noopener noreferrer">
                                    <AccountBoxIcon style={{ fontSize: 30, color: "white" }} />
                                </a>
                            </Link>
                            <Link to='/login' className='text-decorator-none cursor'>
                                <a href="/" rel="noopener noreferrer">
                                    <ExitToAppIcon style={{ fontSize: 30, color: "white" }} />
                                </a>
                            </Link>

                        </Box>
                    </Grid>


                    </Box>


                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;