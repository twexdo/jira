import { Container } from "@mui/material"
import * as React from "react"
import { useNavigate } from 'react-router-dom'
import useFirebaseDatabase from "../../hooks/useFirebase"
import { Project } from "../datas"
import JiraProjectForm from "./projectForm"


const CreateJiraProject = () => {
    const navigate = useNavigate();
    const [write] = useFirebaseDatabase()


    const handleCreateProject = (project: Project) => {
        write("projects/", project)
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
        <JiraProjectForm handleCreateProject={handleCreateProject} />
    </Container >
}

export default CreateJiraProject