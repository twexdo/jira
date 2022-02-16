import { Typography } from "@mui/material"
import { green, grey } from "@mui/material/colors"
import * as React from "react"

type Props = {
    color?: string
    content: string
}

const CBadge: React.FC<Props> = ({ content, color }) => {


    return <Typography

        fontSize="small"
        textOverflow="ellipsis"
        sx={{
            background: color || green[200],
            fontSize: 11,
            padding: "3px",
            paddingRight: "8px",
            paddingLeft: "8px",
            width: "max-content",
            borderRadius: "3px",
            fontWeight: "fontWeightBold",
            color: grey[900] + "af",
            display: "inline !important",
            wordWrap: "normal",
            mr: 1
        }
        }
    >
        {content.toString().toUpperCase()}
    </Typography >

}

export default CBadge