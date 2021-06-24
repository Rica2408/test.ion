import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    display: {
        width: 375,
        height: 812,
        position: 'relative',
        border: 'solid 0.5px rgba(9, 22, 31, 0.3)'
    },
    name: {
        height: 186,
        backgroundImage: 'linear-gradient(to top, rgba(34, 168, 210, 0.2) 115%, rgba(255, 255, 255, 0) -21%)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    nameTitle: {
        fontSize: 16,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#333333',
    },
    nameIcon: {
        width: 24,
        height: 24,
        background: '#333333',
        borderRadius: '50%'
    },
    options: {
        height: 116,
        background: '#783183',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    optionTitle: {
        fontSize: 8,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#ffffff',
    },
    optionIcon: {
        color: '#fff',
        marginBottom: 6,
    },
    optionContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    moves: {
        height: 428,
        position: 'relative',
    },
    actions: {
        width: 375,
        display: 'flex',
        alignItems: 'center',
        height: 82,
        background: '#fff',
        borderRadius: '16px 16px 0 0',
        border: 'solid 0.5px rgba(9, 22, 31, 0.3)'
    },
    actionIcon: {
        height: 40,
        width: 40,
        cursor: 'pointer',
    },
    payInformation: {
        width: 300,
        height: 170,
        position: 'absolute',
        right: 37,
        top: 277,
        borderRadius: 4,
        boxShadow: '0 1px 9px 0 rgba(56, 56, 56, 0.2)',
        backgroundImage: 'linear-gradient(to bottom, #fefefe, #ffffff)',
        paddingTop: 12,
    },
    payInformationTitle: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 4,
        marginLeft: 12
    },
    payInformationSubtitle: {
        fontSize: 12,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#333333',
    },
    payInformationSubtitleAmount: {
        fontSize: 12,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#333333',
        width: 150,
        textAlign: 'center'
    },
    payInformationAmount: {
        fontSize: 28,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.43,
        letterSpacing: 'normal',
        color: '#333333',
        marginLeft: 12
    },
    payInformationDate: {
        fontSize: 18,
        fontWeight: 600,
        fontStretch: 'normalize',
        fontStyle: 'normal',
        lineHeight: 0.89,
        letterSpacing: 'normal',
        color: '#333333',
        marginLeft: 12
    },
    button: {
        background: '#5acaee',
        color: '#fff',
        width: 120,
        height: 32,
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        '&:hover': {
            background: '#5acaee'
        }
    },
    availableBalance: {
        position: 'absolute',
        top: 118,
        right: 37,
    },
    movesBox: {
        position: 'absolute',
        bottom: 0,
        width: 375,
        height: 234,
        overflow: 'hidden',
        flexDirection: 'column',
    },
    movesItem: {
        height: 202,
        overflow: 'auto'
    },
    movesTitle: {
        display: 'flex',
        justifyContent: 'space-around',
        height: 20,
        marginBottom: 10,
    },
    movesSubtitle: {
        width: 221,
        height: 32,
        fontSize: 24,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#333333',
    },
    movesAll: {
        width: 67,
        height: 32,
        fontSize: 15,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#22a8d2',
    },
})