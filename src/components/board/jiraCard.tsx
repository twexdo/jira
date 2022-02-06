import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import * as React from "react"
import useFirebaseDatabase from "../../hooks/useFirebase"
import { getFormatedDate, Task, TaskFromDB } from "../datas"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { red } from "@mui/material/colors";
import DeleteDialog from "../../_shared/dialog";
type Props = {
    task: TaskFromDB
}

const typesz = ["ideea", "task", "progress", "done"]

const JiraCard: React.FC<Props> = ({ task }) => {
    const [, , update, deleteEntery] = useFirebaseDatabase()



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
    return (
        <Card sx={{ mb: 1, minHeight: "150px", }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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