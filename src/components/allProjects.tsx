import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Link as Link1, Typography } from "@mui/material"
import { blue } from '@mui/material/colors'
import * as React from "react"
import { Link } from 'react-router-dom'
import { FreeMode, Mousewheel, Pagination } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeModeOptions } from "swiper/types"
import useFirebaseDatabase from "../hooks/useFirebase"
import useWindowDimensions from '../hooks/useWindowsDimension'
import { Project } from './datas'




const AllProjects = () => {

    const [, listen] = useFirebaseDatabase()
    const [ap, setAP] = React.useState<Project[]>([])

    const windowWidth = useWindowDimensions().width

    React.useEffect(() => {
        listen("/projects", (obj) => {
            if (obj) {
                const pj = Object.values(obj)
                setAP(pj as Project[])
            }
        })
    }, [])


    const RenderProject = (project: Project) => {
        return <Card sx={{
            margin: "1em",
            height: "90%",
            width: "350px",
            background: project.color ?? "white",
            display: "flex",
            flexDirection: "column"
        }}>
            <CardActionArea sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <CardMedia
                    component="img"
                    height="160"
                    image="/logo.png"
                    alt="green iguana"

                    sx={{
                        boxShadow: 2,
                    }}

                />
                <CardContent sx={{
                    flex: 1
                }} >
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name.toUpperCase()}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        ID:{project.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem perspiciatis sed obcaecati animi soluta nostrum necessitatibus ab asperiores magnam!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" sx={{ color: "black", boxShadow: 2 }}>
                    Check
                </Button>
                {
                    <Link1 target="_blank" sx={{ boxShadow: 2, ml: 2, visibility: project.front ? "visible" : "hidden", whiteSpace: "nowrap" }} underline="none" href={project?.front?.git}>
                        <Button size="small" sx={{ color: "black" }}>
                            Git: {project?.front?.name || "__NAME__"}
                        </Button>
                    </Link1>
                }
                {
                    <Link1 target="_blank" sx={{ boxShadow: 2, ml: 2, visibility: project.back ? "visible" : "hidden", whiteSpace: "nowrap" }} underline="none" href={project?.front?.git}>
                        <Button size="small" sx={{ color: "black" }} >
                            Git: {project?.front?.name || "__NAME__"}
                        </Button>
                    </Link1>
                }
            </CardActions>
        </Card >


    }
    const fmo: FreeModeOptions = {
        momentum: false,
        enabled: true,
        sticky: true
    }
    return <Container
        maxWidth={false}
        sx={{
            background: blue[200] + "6f",
            // padding: "3em !important",
            justifyContent: "space-between",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            margin: 0,
            padding: 1,
            flexDirection: "column"
        }}
    >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
                variant="h2"
                color="primary.dark"
                paddingLeft={1.5}
                ml={2}
            >All Projectcts</Typography>
            <Link to="/cnp" >
                <Button
                    endIcon={<AddIcon />}
                    variant="contained">
                    New Project
                </Button>
            </Link>
        </Box>
        <Box sx={{ flex: 1, display: "flex", ml: 3, mr: 3 }}  >
            <Swiper
                style={{
                    flex: 1,
                }}
                freeMode={fmo}
                mousewheel={true}
                slidesPerView={windowWidth / 400}
                centeredSlides={true}
                spaceBetween={100}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Mousewheel, FreeMode]}
                className="mySwiper"
            >
                {ap.map((project, idx) => <SwiperSlide key={idx}>{RenderProject(project)}</SwiperSlide>)}
            </Swiper>

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