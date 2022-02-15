// import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import { Tooltip } from '@material-ui/core';
import useUser from '../hooks/useUser';

type Props = {
    user?: string
}
const ResponsiveAppBar: React.FC<Props> = ({ user }) => {
    const [, , signOut] = useUser()
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
                        {user || "Twexdo"}'s Jira Board
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: "flex" }}>
                        {
                            !user && <Link to="/" >
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                                    Login
                                </Button>
                            </Link>
                        }
                        {
                            user && <>
                                <Link to="/" >
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                                        Board
                                    </Button>
                                </Link>
                                <Link to="/cni" >
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                                        Create
                                    </Button>
                                </Link>
                                <Link to="/all-projects" >
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                                        All Projects
                                    </Button>
                                </Link>
                                <Link to="/about" >
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                                        About
                                    </Button>
                                </Link>

                            </>
                        }
                        <Link style={{ marginLeft: "auto", }} to="/test" >
                            <Button sx={{ my: 2, color: 'red', display: 'block' }}  >
                                (Swiper.js example)
                            </Button>
                        </Link>

                        {
                            user && <Link onClick={signOut} to="/" >
                                <Tooltip title="Sign out">
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}  >
                                        <SettingsPowerIcon />
                                    </Button>
                                </Tooltip>
                            </Link>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;