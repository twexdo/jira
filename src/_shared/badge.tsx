import { Typography } from "@mui/material"
import { green, grey } from "@mui/material/colors"
import * as React from "react"

type Props = {
    color?: number
    content: string
}

const CBadge: React.FC<Props> = ({ content }) => {



    return <Typography

        fontSize="small"
        textOverflow="ellipsis"
        sx={{
            background: green[200],
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
        {content.toUpperCase()}
    </Typography >

}

export default CBadge