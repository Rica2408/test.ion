import { Box } from '@material-ui/core'
import { useStyles } from './styles'

const AvailableBalance = () => {
    const classes = useStyles()
    return (
        <Box className={classes.availableBalance}>
            <Box className={classes.availableBalanceTitle}>SALDO DISPONIBLE</Box>
            <Box className={classes.availableBalanceAmount}>$1,499,970.00</Box>
        </Box>
    )
}

export default AvailableBalance
