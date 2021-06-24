import { Box } from "@material-ui/core"
import { FC } from "react"

import { SignalCellularAlt, Wifi, Battery60 } from '@material-ui/icons'
import { useStyles } from './Notifications.styles'

const Notifications: FC = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Box marginLeft="21px">9:41</Box>
            <Box display="flex" marginRight="17px">
                <SignalCellularAlt/>
                <Wifi/>
                <Battery60/>
            </Box>
        </Box>
    )
}

export default Notifications
