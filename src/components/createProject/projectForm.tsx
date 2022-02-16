import { Box, Button, TextField, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import * as React from "react"
import { useState } from "react"
import { Project } from "../datas"

type Props = {
    handleCreateProject: (task: Project) => void
}
const useStyle = makeStyles({
    textFIeld: {
        "&>div": {
            background: "white !important"
        }
    }
})

// export type Project = {
//     id: number | string
//     name: string
//     color?: "string"
//     front?: {
//         name: string
//         git: string
//     }
//     back?: {
//         name: string
//         git: string
//     }
// }

const JiraProjectForm: React.FC<Props> = ({ handleCreateProject }) => {
    const style = useStyle()

    const id = useState("")
    const name = useState("")
    const color = useState("")
    const frontName = useState("")
    const frontGit = useState("")
    const backName = useState("")
    const backGit = useState("")


    const onSubmit = () => {
        // !isValid(title) && setErrors(e => [...e, "title"])
        // !isValid(description) && setErrors(e => [...e, "description"])

        const date = new Date().toString()
        let obj: Project = {
            creationDate: date,
            id: id[0],
            name: name[0],
            color: color[0] || "#fff",
        }
        if (frontName[0] && frontGit[0]) {
            obj = {
                ...obj,
                front: {
                    name: frontName[0],
                    git: frontName[0]
                }
            }
        }
        if (backName[0] && backGit[0]) {
            obj = {
                ...obj,
                back: {
                    name: backName[0],
                    git: backGit[0]
                }
            }
        }
        handleCreateProject(obj)
    }


    const field = (label: string, state: any, required?: boolean, minLength?: number,) => {
        if (!state) return
        return (
            <TextField
                sx={{
                    maxWidth: "20em",
                }}
                value={state[0]}
                onChange={e => state[1](e.target.value)}
                autoFocus
                className={style.textFIeld}
                required={required}
                error={required ? state[0].length < (minLength || 3) : false}
                label={label}
                placeholder="must be unique"
            />
        )
    }

    return (<>
        <Typography
            sx={{ opacity: .79 }}
            variant="h2"
            color="primary.dark"
            paddingLeft={1.5}
        >Create new Project</Typography>
        <Box margin={2} display="flex" flexDirection="column" justifyContent="space-between" flex={1}>
            {field("ID", id, true, 1)}
            {field("Name", name, true, 3)}
            {field("Color", color, true, 3)}
            {field("Front Project Name", frontName, false)}
            {field("Front Project Git Url", frontGit, false)}
            {field("BacK Project Name", backName, false)}
            {field("Back Project Git Url", backGit, false)}
            <Box display="flex" flexDirection="row-reverse">
                <Button onClick={onSubmit} size="medium" variant="contained" >
                    Create
                </Button>
            </Box>
        </Box>
    </>)
}
export default JiraProjectForm