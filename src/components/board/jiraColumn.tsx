import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles";
import * as React from "react"
import { Task, TaskFromDB } from "../datas"
import JiraCard from "./jiraCard";

type Props = {
    col: TaskFromDB[]
}
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
const JiraColumn: React.FC<Props> = ({ col }) => {
    const { list } = styles()
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
                return <JiraCard key={idx} task={x} />
            })}

        </Grid>
    )
}
export default JiraColumn