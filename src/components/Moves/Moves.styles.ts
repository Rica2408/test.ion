import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    moveIcon: {
        display: 'flex',
        width: 44,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    moveSecond: {
        display: 'flex',
        flexDirection: 'column',
        width: 120,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    moveThird: {
        display: 'flex',
        flexDirection: 'column',
        width: 120,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 10
    },
    item: {
        height: 55,
        borderBottom: 'solid 0.5px #bbbbbb',
        cursor: 'pointer'
    },
    icon: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'red'
    },
    title: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.43,
        color: '#333333'
    },
    subtitleDate: {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.67,
        color: '#333333'
    },
    amount: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.43,
        color: '#333333'
    },
})