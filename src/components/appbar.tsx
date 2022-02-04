// import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';


const ResponsiveAppBar = () => {



    return (
        <AppBar position="static">
            <Container sx={{ ml: 0 }} maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ pl: 0, ml: 1, mr: 2, display: "flex" }}
                    >
                        Twexdo's Jira Board
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                            <Link to="/" >Board</Link>
                        </Button>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                            <Link to="/create-new-ideea" >Create</Link>
                        </Button>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                            <Link to="/about" >About</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;