import { Button, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import * as React from "react"

type Props = {
    user: string,
    login: (name: string) => void
}

const useStyle = makeStyles({
    main: {
        backgroundColor: "#1976d2",
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden"

    },
    logoWrapper: {
        flex: .4,
        background: "url(/bg.jpg) no-repeat",
        backgroundSize: "cover",
        paddingRight: "11em",
        display: "flex",
        animation: "$fadeIn .75s ease-in-out"
    },
    logoContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    container: {
        flex: .6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    logo: {
        background: "url(/logo_image.svg) no-repeat",
        backgroundSize: "contain",
        height: "150px",
        width: "150px",
        zIndex: "2"
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)"
        }
    },
    "@keyframes fadeIn2": {
        "0%": {
            opacity: 0,
            transform: "translateX(50em)"
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)"
        }
    },
    logo2: {
        background: "url(/logo_name.png) no-repeat",
        backgroundSize: "contain",
        height: "250px",
        width: "250px",
        zIndex: "1",
        marginTop: "-5.5em"
    },
    textes: {
        animation: "$fadeIn2 .75s ease-in-out"
    },
    buttons: {
        animation: "$fadeIn2 .75s ease-in-out"
    }
})

const AutenthicatePage: React.FC<Props> = ({ login, user }) => {

    const { main, logoContainer, container, logo, logo2, logoWrapper, textes, buttons } = useStyle()

    return <div className={main}>
        <div className={logoWrapper}>
            <div className={logoContainer}>
                <div className={logo}></div>
                {/* <Typography ml={0} variant="h2" fontWeight="fontWeightBold">TWEXDO</Typography> */}
                <div className={logo2}></div>
            </div>
        </div>
        <div className={container}>
            <div className={textes}>
                <Typography fontWeight="fontWeightBold" variant="h2">Hello dear user!</Typography>
                <Typography fontWeight="fontWeightBold" variant="h5">Please log in to enable the features of this app.</Typography>
            </div>
            <Button className={buttons} sx={{ color: "white" }} variant="contained" onClick={() => { login("Adrian") }}>LOGIN</Button>
        </div>
    </div>
}
export default AutenthicatePage