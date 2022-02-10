import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import * as React from "react"
import useFirebaseDatabase from "../../hooks/useFirebase"
import { getFormatedDate, Project, Task, TaskFromDB } from "../datas"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { green, purple, red, yellow } from "@mui/material/colors";
import DeleteDialog from "../../_shared/dialog";
import CBadge from "../../_shared/badge";
type Props = {
    task: TaskFromDB
}

const COLOR_IDEEA = purple[300]
const COLOR_TASK = red[300]
const COLOR_PROGRESS = yellow[300]
const COLOR_DONE = green[300]


const typesz = ["ideea", "task", "progress", "done"]

const JiraCard: React.FC<Props> = ({ task }) => {
    const [, , update, deleteEntery, geter] = useFirebaseDatabase()

    const [taskP, setTaskP] = React.useState<Project>()

    React.useEffect(() => {
        geter("projects", (data) => {
            const curentProject = (Object.values(data) as Project[]).find(x => x?.id == task.project)
            console.log("adi0", data)
            console.log("adi1", Object.values(data))
            console.log("adi2", curentProject)
            setTaskP(curentProject)
        })
    }, [])

    const next = () => {
        const idx = typesz.indexOf(task.type) + 1
        update("tasks", { ...task, type: typesz[idx] })
    }
    const back = () => {
        const idx = typesz.indexOf(task.type) + -1
        update("tasks", { ...task, type: typesz[idx] })
    }
    const remove = () => {
        deleteEntery("tasks", task.id)
    }

    const getTaskColor = () => {
        switch (task.type) {
            case "task": return COLOR_TASK
            case "progress": return COLOR_PROGRESS
            case "done": return COLOR_DONE
            default: return COLOR_IDEEA
        }
    }

    return (
        <Card sx={{ mb: 1, minHeight: "150px", }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: getTaskColor() }} aria-label="recipe">
                        {task.title[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <DeleteDialog onConfirm={remove} />
                }
                title={task.title}
                subheader={
                    <Card sx={{ display: "flex", boxShadow: "none" }}>
                        <Typography variant="subtitle2">{getFormatedDate(task.creationDate)[0]}</Typography>
                        <Typography variant="subtitle2" ml={2}>{getFormatedDate(task.creationDate)[1]}</Typography>
                    </Card>}
            />
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {task.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
                <CBadge>{taskP?.name}</CBadge>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }} disableSpacing>
                <IconButton onClick={back} sx={{ visibility: task.type != "ideea" ? "visible" : "hidden" }} aria-label="back">
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton onClick={next} sx={{ visibility: task.type != "done" ? "visible" : "hidden" }} aria-label="forward">
                    <ArrowForwardIosIcon />
                </IconButton>
            </CardActions>

        </Card >)


}
export default JiraCard