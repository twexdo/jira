import { Typography } from "@mui/material"
import { green, grey } from "@mui/material/colors"
import * as React from "react"
import useFirebaseDatabase from "../hooks/useFirebase"

type Props = {
    color?: number
}

const CBadge: React.FC<Props> = ({ children, color }) => {



    return <Typography
        sx={{
            background: green[200],
            fontSize: 12,
            padding: "3px",
            paddingRight: "10px",
            paddingLeft: "10px",
            width: "max-content",
            borderRadius: "3px",
            fontWeight: "fontWeightBold",
            color: grey[900] + "af"

        }}
    >
        {children}
    </Typography>

}

export default CBadge