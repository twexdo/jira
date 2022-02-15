import { Typography, Box, TextField, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { style } from "@mui/system"
import * as React from "react"
import { useState } from "react"
import { getFormatedDate, Task } from "../datas"

type Props = {
    handleCreateTask: (task: Task) => void
}
const useStyle = makeStyles({
    textFIeld: {
        "&>div": {
            background: "white !important"
        }
    }
})

const isValid = (text: string) => text.length > 3
const JiraForm: React.FC<Props> = ({ handleCreateTask }) => {
    const style = useStyle()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [projectAssign, setProjectAssign] = useState("")
    const [errors, setErrors] = useState<string[]>([])

    const onSubmit = () => {
        !isValid(title) && setErrors(e => [...e, "title"])
        !isValid(description) && setErrors(e => [...e, "description"])

        if (isValid(title) && isValid(description)) {
            const date = new Date().toString()

            handleCreateTask({
                title,
                description,
                creationDate: date,
                type: "ideea",
                project: projectAssign
            })
        }

    }

    const handleChangeTitle = (e: any) => {
        setTitle(e.target.value)
        if (e.target.value.length < 3) {
            setErrors(errors => errors.filter(x => x != "title"))
        }
    }

    const handleChangePA = (e: any) => {
        setProjectAssign(e.target.value)
        if (e.target.value.length < 3) {
            setErrors(errors => errors.filter(x => x != "pa"))
        }
    }

    const handleChangeDescription = (e: any) => {
        setDescription(e.target.value)
        if (e.target.value.length < 3) {
            setErrors(errors => errors.filter(x => x != "description"))
        }
    }
    return (<>
        <Typography
            sx={{ opacity: .79 }}
            variant="h2"
            color="primary.dark"
            paddingLeft={1.5}
        >Create Jira Task</Typography>
        <Box margin={2} display="flex" flexDirection="column" justifyContent="space-between" flex={1}>
            <TextField
                sx={{
                    maxWidth: "20em",
                }}
                value={title}
                onChange={handleChangeTitle}
                autoFocus
                className={style.textFIeld}
                required
                error={errors.includes("title")}
                id="outlined-required"
                label="Title"
                placeholder="Create jira board"
            />
            <TextField
                sx={{
                    maxWidth: "20em",
                }}
                value={projectAssign}
                onChange={handleChangePA}
                autoFocus
                className={style.textFIeld}
                required
                error={errors.includes("pa")}
                id="outlined-required"
                label="Project"
                placeholder="eg.: jira "
            />
            <TextField
                placeholder="Create jira board  like the jira you have at work. Jira must have 4 collumns..."
                className={style.textFIeld}
                id="outlined-required"
                label="Description"
                error={errors.includes("description")}
                value={description}
                onChange={handleChangeDescription}
            />
            <Box display="flex" flexDirection="row-reverse">
                <Button onClick={onSubmit} size="medium" variant="contained" >
                    Create
                </Button>
            </Box>
        </Box>
    </>)
}
export default JiraForm