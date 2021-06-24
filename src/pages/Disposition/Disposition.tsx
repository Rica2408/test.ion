import { Box, Button, TextField } from "@material-ui/core"
import { FC, useState } from "react"
import { useStyles } from "./Disposition.styles"
import { DispositionProps } from "./Disposition.types"
import { ArrowBack } from '@material-ui/icons'
import AvailableBalance from "../../components/AvailableBalance"
import { ChartDonut } from '@patternfly/react-charts';

const Disposition: FC<DispositionProps> = ({ setIsHome, move }) => {
    const classes = useStyles()
    const [ dataGraphic, setDataGraphic ] = useState(20)

    return (
        <Box className={classes.display}>
            <Box marginLeft="33px" marginRight="32px">
                <Box className={classes.options}>
                    <ArrowBack className={classes.back} onClick={() => setIsHome(true)}/>
                    <Box className={classes.cancel} onClick={() => setIsHome(true)}>CANCELAR</Box>
                </Box>
                <Box className={classes.title}>Disposicion</Box>
                <Box marginBottom="22px">
                    <AvailableBalance/>
                </Box>
                <TextField
                    className={classes.textField}
                    id="title"
                    defaultValue={move.title}
                    variant="outlined"
                    size="small"
                    inputProps={{
                        readOnly: true
                    }}
                />
                <TextField
                    className={classes.textField}
                    id="amount"
                    defaultValue={`$ ${move.amount}`}
                    variant="outlined"
                    size="small"
                    inputProps={{
                        readOnly: true
                    }}
                />
                <Box className={classes.subtitle}>Selecciona tu plazo</Box>
                <Box className={classes.circle}>
                    <Box className={classes.data1} onMouseOver={() => setDataGraphic(8)}></Box>
                    <Box className={classes.data2} onMouseOver={() => setDataGraphic(16)}></Box>
                    <Box className={classes.data3} onMouseOver={() => setDataGraphic(24)}></Box>
                    <Box className={classes.data4} onMouseOver={() => setDataGraphic(33)}></Box>
                    <Box className={classes.data5} onMouseOver={() => setDataGraphic(41)}></Box>
                    <Box className={classes.data6} onMouseOver={() => setDataGraphic(50)}></Box>
                    <Box className={classes.data7} onMouseOver={() => setDataGraphic(58)}></Box>
                    <Box className={classes.data8} onMouseOver={() => setDataGraphic(66)}></Box>
                    <Box className={classes.data9} onMouseOver={() => setDataGraphic(74)}></Box>
                    <Box className={classes.data10} onMouseOver={() => setDataGraphic(83)}></Box>
                    <Box className={classes.data11} onMouseOver={() => setDataGraphic(91)}></Box>
                    <Box className={classes.data12} onMouseOver={() => setDataGraphic(100)}></Box>

                    <ChartDonut
                        allowTooltip={false}
                        ariaTitle="Donut chart example"
                        constrainToVisibleArea={true}
                        data={[{ x: '', y: dataGraphic }, { x: '', y: 100 - dataGraphic }]}
                        labels={() => ''}
                        colorScale={['#bb64c8', 'white']}
                        title={`${dataGraphic}`}
                    />
                </Box>
                <Button className={classes.button} onClick={() => setDataGraphic(30)}> lo quiero</Button>
            </Box>
        </Box>
    )
}

export default Disposition
