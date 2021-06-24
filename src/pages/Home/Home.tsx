import { FC } from 'react'
import { Box, Button} from '@material-ui/core'
import { useStyles } from './styles'
import { Notifications as Noti, LocalOffer, Star, CreditCard, MonetizationOn, Home as HomeIcon } from '@material-ui/icons'
import AvailableBalance from '../../components/AvailableBalance'
import Moves from '../../components/Moves'
import { MoveType } from '../../components/Moves/Moves.types'
import { HomeProps } from './Home.types'
import Notifications from '../../components/Notifications'

const moves: MoveType[] = [
    {
        title: 'Auto',
        subtitle: 'Mis logros',
        amount: 350000,
        date: '2m',
    },
    {
        title: 'CFE',
        subtitle: 'Pago de servicio',
        amount: 280,
        date: 'Ayer',
    },
    {
        title: 'Netflix',
        subtitle: 'Suscripciones',
        amount: 140,
        date: '28 de dic',
    },
    {
        title: 'Soriana',
        subtitle: 'Pago de servicio',
        amount: 15,
        date: '25 de dic',
    }
]

const Home: FC<HomeProps> = ({ setIsHome, setSelectedMove }) => {
    const classes = useStyles()

    return (
        <Box className={classes.display}>
            <Notifications />
            <Box className={classes.name}>
                <Box></Box>
                <Box className={classes.nameTitle}>Hola José</Box>
                <Box className={classes.nameIcon}></Box>
            </Box>
            <Box className={classes.options}>
                <Box className={classes.optionContent}>
                    <Star className={classes.optionIcon}/>
                    <Box className={classes.optionTitle}>Pagar servicio</Box>
                </Box>
                <Box className={classes.optionContent}>
                    <LocalOffer className={classes.optionIcon}/>
                    <Box className={classes.optionTitle}>Crear logro</Box>
                </Box>
                <Box className={classes.optionContent}>
                    <Noti className={classes.optionIcon}/>
                    <Box className={classes.optionTitle}>Suscripcion</Box>
                </Box>
            </Box>
            <Box className={classes.moves}>
                <Box className={classes.movesBox}>
                    <Box className={classes.movesTitle}>
                        <Box className={classes.movesSubtitle}>Tus movimientos</Box>
                        <Box className={classes.movesAll}>Ver todos</Box>
                    </Box>
                    <Box className={classes.movesItem}>
                        <Box>
                            {moves.map((move, index) => (
                                <Moves 
                                    key={index}
                                    move={move}
                                    setSelectedMove={setSelectedMove}
                                    setIsHome={setIsHome}
                                />
                            ))}
                        </Box>
                    </Box>    
                </Box>
            </Box>
            <Box className={classes.actions}>
                <Box width="375px" display="flex" justifyContent="space-around" alignItems="center">
                    <HomeIcon className={classes.actionIcon}/>
                    <MonetizationOn className={classes.actionIcon} onClick={() => setIsHome(false)}/>
                    <CreditCard className={classes.actionIcon}/>
                    <Star className={classes.actionIcon}/>
                    <Noti className={classes.actionIcon}/>
                </Box>
            </Box>
            <Box className={classes.availableBalance}>
                <AvailableBalance/>
            </Box>
            <Box className={classes.payInformation}>
                <Box className={classes.payInformationTitle}>Tu próximo pago</Box>
                <Box className={classes.payInformationAmount}>$28,860.00</Box>
                <Box display="flex" marginBottom="12px">
                    <Box style={{width: '150px'}}>
                        <Box className={classes.payInformationTitle}>Fecha de pago</Box>
                        <Box className={classes.payInformationDate}>16 Enero</Box>
                    </Box>
                    <Button className={classes.button}>
                        Pagar ahora
                    </Button>
                </Box>
                <Box marginLeft="12px" display="flex" flexWrap="wrap">
                    <Box display="flex">
                        <Box display="flex" width="150px">
                            <MonetizationOn/>
                            <Box className={classes.payInformationSubtitle}>Mis logros</Box>
                        </Box>
                        <Box className={classes.payInformationSubtitleAmount}>$27,260.00</Box>
                    </Box>
                    <Box display="flex" width="300px">
                        <Box display="flex" width="150px">
                            <CreditCard/>
                            <Box className={classes.payInformationSubtitle}>Compras con TDC</Box>
                        </Box>
                        <Box className={classes.payInformationSubtitleAmount}>$1,600.00</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
