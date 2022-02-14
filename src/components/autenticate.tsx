import { Button } from "@mui/material"
import * as React from "react"

type Props = {
    user: string,
    login: (name: string) => void
}

const AutenthicatePage: React.FC<Props> = ({ login, user }) => {


    return <div>
        <h4>Hi {user}!</h4>
        <Button onClick={() => { login("Adrian") }}>LOGIN</Button>
    </div>
}
export default AutenthicatePage