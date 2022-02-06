import styled from "@emotion/styled"
import { Grid } from "@mui/material"

const CustomizedGrid = styled(Grid)(() => ({
    display: "flex",
    padding: ".5em",
    mt: 0,
    borderRight: "2px dashed #ffffff",
    "&:last-child": {
        borderRight: "unset"
    },
    justifyContent: "center",
    alignItems: "center",
}))
export default CustomizedGrid