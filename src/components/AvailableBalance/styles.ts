import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    availableBalance: {
        paddingTop: 12,
        width: 300,
        height: 86,
        borderRadius: 4,
        boxShadow: '0 1px 9px 0 rgba(56, 56, 56, 0.2)',
        backgroundImage: 'linear-gradient(to bottom, #fefefe, #ffffff)'
    },
    availableBalanceTitle: {
        fontSize: 12,
        marginBottom: 7,
        marginLeft: 12
    },
    availableBalanceAmount: {
        fontSize: 34,
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.18,
        letterSpacing: 'normal',
        color: '#bb64c8',
        marginLeft: 12
    },
})