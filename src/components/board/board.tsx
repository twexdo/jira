import { Grid, Typography } from "@mui/material";
import * as React from "react";
import useFirebaseDatabase from "../../hooks/useFirebase";
import { Task, TaskFromDB } from "../datas";
import CustomizedGrid from "./customizedGrid";
import JiraColumn from "./jiraColumn";


const Board = () => {

    const [, listen] = useFirebaseDatabase()


    const [ideeas, setIdeeas] = React.useState<TaskFromDB[]>([])
    const [tasks, setTasks] = React.useState<TaskFromDB[]>([])
    const [progress, setProgress] = React.useState<TaskFromDB[]>([])
    const [done, setDone] = React.useState<TaskFromDB[]>([])

    React.useEffect(() => {
        listen("tasks", (tasks) => {
            let list: TaskFromDB[] = []
            if (tasks) {
                const entries = Object.entries(tasks)
                list = entries.map(x => {
                    const key = x[0];
                    const task = x[1] as Task;
                    return { id: key, ...task };
                }) as TaskFromDB[]
            }
            setIdeeas((list.filter(x => x.type == "ideea")))
            setTasks((list.filter(x => x.type == "task")))
            setProgress((list.filter(x => x.type == "progress")))
            setDone((list.filter(x => x.type == "done")))
        })
    }, [])

    const renderHeader = () => {
        return (
            <Grid sx={{
                maxWidth: "100vw",
                ml: 0,
                bgcolor: "rgba(174, 196, 199, 0.79)",
                mt: 0,
            }} container spacing={2}>
                <CustomizedGrid item xs={3}>
                    <Typography variant="h6">IDEEAS</Typography>
                </CustomizedGrid>
                <CustomizedGrid item xs={3}>
                    <Typography variant="h6">TASKS</Typography>
                </CustomizedGrid>
                <CustomizedGrid item xs={3}>
                    <Typography variant="h6" >IN PROGRESS</Typography>
                </CustomizedGrid>
                <CustomizedGrid sx={{ display: "flex" }} item xs={3}>
                    <Typography variant="h6">DONE</Typography>
                </CustomizedGrid>
            </Grid>
        )
    }

    const renderBody = () => {
        return (
            <Grid sx={{
                width: "100vw",
                bgcolor: "rgba(224, 247, 250, 0.79)",
                flex: 1,
                ml: 0,
                mt: 0
            }
            } container spacing={2} >
                <JiraColumn col={ideeas} />
                <JiraColumn col={tasks} />
                <JiraColumn col={progress} />
                <JiraColumn col={done} />
            </Grid >
        )

    }


    return <div className="container">
        {renderHeader()}
        {renderBody()}
    </div>
}

export default Board
