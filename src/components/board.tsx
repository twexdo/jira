import { Card, CardActionArea, CardContent, Grid, styled, Typography } from "@mui/material"
import * as React from "react"
import { Task, _done, _ideeas, _progress, _tasks } from "./datas"
import { makeStyles } from '@mui/styles';

const MyGrid = styled(Grid)(() => ({
    display: "flex",
    padding: "1em",
    borderRight: "2px dashed #ffffff",
    "&:last-child": {
        borderRight: "unset"
    },
    justifyContent: "center",
    alignItems: "center",
}))

const styles = makeStyles({
    list: {
        overflowY: "auto",
        margin: 0,
        padding: "1em",
        listStyle: "none",
        height: "100%",
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',

        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: "5px",
            backgroundColor: '#ffffff',
            outline: '1px solid #aec4c7'
        }
    }
});
const Board = () => {

    const [ideeas, setIdeeas] = React.useState(_ideeas)
    const [tasks, setTasks] = React.useState(_tasks)
    const [progress, setProgress] = React.useState(_progress)
    const [done, setDone] = React.useState(_done)
    const { list } = styles()
    const renderCard = (content: Task) => {
        return (
            <Card sx={{ mb: 1, minHeight: "150px" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {content.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {content.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>)
    }

    const renderCollumn = (col: Task[]) => {
        return (

            <Grid className={list} item xs={3} sx={{
                overflow: 'auto',
                height: "87vh !important",
                flexDirection: "column",
                mr: 1,
                borderRight: "2px dashed #ffffff",
                "&:last-child": {
                    borderRight: "unset"
                },
            }}>
                {col.map((x, idx) => {
                    return renderCard(x)
                })}

            </Grid>
        )
    }

    const renderHeader = () => {
        return (
            <Grid sx={{
                maxWidth: "100vw",
                ml: 0,
                bgcolor: "#aec4c7",
            }} container spacing={2}>
                <MyGrid item xs={3}>
                    <Typography variant="h6">IDEEAS</Typography>
                </MyGrid>
                <MyGrid item xs={3}>
                    <Typography variant="h6">TASKS</Typography>
                </MyGrid>
                <MyGrid item xs={3}>
                    <Typography variant="h6" >IN PROGRESS</Typography>
                </MyGrid>
                <MyGrid sx={{ display: "flex" }} item xs={3}>
                    <Typography variant="h6">DONE</Typography>
                </MyGrid>
            </Grid>
        )
    }

    const renderBody = () => {
        return (
            <Grid sx={{
                width: "100vw",
                bgcolor: "#e0f7fa",
                flex: 1,
                ml: 0,
            }
            } container spacing={2} >
                {renderCollumn(ideeas)}
                {renderCollumn(tasks)}
                {renderCollumn(progress)}
                {renderCollumn(done)}
            </Grid >
        )

    }

    return <div className="container">
        {renderHeader()}
        {renderBody()}
    </div>
}

export default Board
