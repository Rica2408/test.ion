import { FC } from 'react'
import { Box } from '@material-ui/core'
import { MoveProps } from './Moves.types'
import { useStyles } from './Moves.styles'

const Moves: FC<MoveProps> = ({ move, setIsHome, setSelectedMove}) => {
    const classes = useStyles()

    const handlerOnclick = () => {
        setIsHome(false)
        setSelectedMove(move)
    }

    return (
        <Box className={classes.item} display="flex" onClick={handlerOnclick}>
            <Box display="flex" width="240px" marginLeft="12px">
                <Box className={classes.moveIcon}>
                    <Box className={classes.icon}></Box>
                </Box>
                <Box className={classes.moveSecond}>
                    <Box className={classes.title}>{move.title}</Box>
                    <Box className={classes.subtitleDate}>{move.subtitle}</Box>
                </Box>
            </Box>
            <Box className={classes.moveThird}>
                <Box className={classes.subtitleDate}>{move.date}</Box>
                <Box className={classes.amount}>{move.amount}</Box>
            </Box>
            
        </Box>
    )
}

export default Moves
