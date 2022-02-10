import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Fade, Grid, IconButton, Link, Typography } from "@mui/material"
import { blue, grey } from '@mui/material/colors'
import * as React from "react"
import useFirebaseDatabase from "../hooks/useFirebase"
import { Project } from './datas'



const AllProjects = () => {

    const [, listen] = useFirebaseDatabase()

    const [ap, setAP] = React.useState<Project[]>([])
    const [current, setCurrent] = React.useState(0)
    React.useEffect(() => {
        listen("/projects", (obj) => {
            const pj = Object.values(obj)
            console.log(pj)
            setAP(pj as Project[])
        })
    }, [])

    const setMinus = () => {
        setCurrent(x => x - 1)
    }
    const setPlus = () => {
        setCurrent(x => x + 1)
    }

    const RenderProject = (project: Project) => {
        return <Card sx={{ maxWidth: 345, height: "max-content", background: project.color ?? "white" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image="/logo.png"
                    alt="green iguana"

                    sx={{
                        boxShadow: 2,
                    }}

                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem perspiciatis sed obcaecati animi soluta nostrum necessitatibus ab asperiores magnam!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx={{ boxShadow: 2 }} size="small" color="primary">
                    Check
                </Button>
                {
                    !!project.front &&
                    <Link sx={{ boxShadow: 2, ml: 2 }} underline="none" href={project?.front?.git}>
                        <Button size="small" color="primary">
                            Git: {project?.front?.name}
                        </Button>
                    </Link>
                }
                {
                    !!project.back &&
                    <Link sx={{ boxShadow: 2, ml: 2 }} underline="none" href={project?.front?.git}>
                        <Button size="small" color="primary">
                            Git: {project?.front?.name}
                        </Button>
                    </Link>
                }
            </CardActions>
        </Card>


    }

    return <Container
        maxWidth={false}
        sx={{
            background: blue[200] + "6f",
            // padding: "3em !important",
            justifyContent: "space-between",
            height: "100%",
            display: "flex",
            margin: 0,
            padding: 1,
            flexDirection: "column"
        }}
    >
        <Typography
            variant="h2"
            color="primary.dark"
            paddingLeft={1.5}
            ml={2}
        >All Projectcts</Typography>
        <Box sx={{ flex: 1, display: "flex", ml: 3, mr: 3 }}  >
            {
                ap.map(project => RenderProject(project))
            }


            {/* <IconButton size="large" onClick={setMinus} sx={{ position: "absolute", top: "50%", left: 0 }} aria-label="back">
                <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>
            <IconButton size="large" onClick={setPlus} sx={{ position: "absolute", top: "50%", right: 0 }} aria-label="forward">
                <ArrowForwardIosIcon fontSize="large" />
            </IconButton> */}
        </Box>

    </Container >
}

export default AllProjects