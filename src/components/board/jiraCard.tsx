import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from "@mui/material"
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
        <Card sx={{
            mb: 1,
            minHeight: "100px",
            ".MuiCardHeader-title": {
                display: "flex",
                cursor: "pointer"
            },
            ".MuiCardHeader-content": {
                overflow: "auto"
            }
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: getTaskColor() }} aria-label="recipe">
                        {task.title[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <DeleteDialog onConfirm={remove} />
                }
                title={
                    <>
                        <CBadge color={taskP?.color} content={taskP?.name.toUpperCase() ?? ""} />
                        <Tooltip id="ttip" arrow placement="top" title={task.title ?? ""}>
                            <Typography width={"60%"} textOverflow="ellipsis" noWrap variant="subtitle1" sx={{ display: "inline", whiteSpace: "nowrap" }} fontSize="small"> {task.title.replace("Jira -", "")}</Typography>
                        </Tooltip>
                    </>
                }
                subheader={
                    <Card sx={{ display: "flex", boxShadow: "none" }}>
                        <Typography fontSize="small">{getFormatedDate(task.creationDate)[0]}</Typography>
                        <Typography fontSize="small" ml={2}>{getFormatedDate(task.creationDate)[1]}</Typography>
                    </Card>}
            />
            <CardActionArea>
                <CardContent>
                    <Typography fontSize="small" variant="body2" color="text.secondary">
                        {task.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }} disableSpacing>
                <IconButton onClick={back} sx={{ visibility: task.type != "ideea" ? "visible" : "hidden" }} >
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={next} sx={{ visibility: task.type != "done" ? "visible" : "hidden" }} aria-label="forward">
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </CardActions>

        </Card >)


}
export default JiraCard