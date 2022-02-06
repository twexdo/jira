import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import * as React from "react"
import useFirebaseDatabase from "../../hooks/useFirebase"
import { Task } from "../datas"
import JiraForm from "./jiraForm"
import { useNavigate } from 'react-router-dom';


const useStyle = makeStyles({
    image: {
        position: "absolute",
        zIndex: "-1"
    }
})
const CreateJiraIdeea = () => {
    const style = useStyle()
    const navigate = useNavigate();
    const [write, listen] = useFirebaseDatabase()

    React.useEffect(() => {
        listen("tasks", (tasks: any) => {
            console.log(tasks)
        })
    }, [])

    const handleCreateTask = (task: Task) => {
        console.log("New task :", task)
        write("tasks/", task)
        navigate('/')

    }


    return <Container
        maxWidth={false}
        sx={{

            // padding: "3em !important",
            justifyContent: "space-between",
            height: "100%",
            display: "flex",
            margin: 0,
            padding: 1,
            flexDirection: "column"
        }}
    >
        <JiraForm handleCreateTask={handleCreateTask} />
    </Container >
}

export default CreateJiraIdeea