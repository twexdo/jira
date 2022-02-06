import { Container, Link, Typography } from "@mui/material"
import * as React from "react"

const About = () => {
    return <Container sx={{ padding: "5em !important", margin: 0, maxWidth: "70vw !important" }}>
        <Typography variant="h4"
            sx={{
                fontWeight: "fontWeightMedium",
                fontFamily: "New Tegomin",
                border: "1px solid black",
                padding: 1
            }}>
            This program was made by <Link underline="none" href="https://www.linkedin.com/in/adrian-vasile-stef-86b936192/"  > @Stef-Vasile-Adrian.</Link><br /><br />
            Jira-Website is a copy of jira ideea and is helping programmers to get a better planning with their programming.

        </Typography>
    </Container >
}

export default About