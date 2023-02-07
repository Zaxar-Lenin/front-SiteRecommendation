import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NavBar = () => {
    const [isAuth,setIsAuth] = useState(false)
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {isAuth
                        ?
                        < Button sx={{backgroundColor : 'red', color: "#000"}} variant="contained" component="label">
                            Войти
                        </Button>
                        :
                        <Box sx={{display: 'flex', justifyContent: "space-between" ,width: "100%"}}>
                            < Button sx={{backgroundColor : 'red', color: "#000"}} variant="contained" component="label">
                                Выйти
                            </Button>
                            <Box sx={{display: 'flex', justifyContent: "space-between" ,width: "400px"}}>
                                <Box>
                                    name
                                </Box>
                                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={6} color="error">
                                        <FavoriteIcon/>
                                    </Badge>
                                </IconButton>

                            </Box></Box>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;