import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    display: {
        width: 375,
        height: 812,
        position: 'relative',
        border: 'solid 0.5px rgba(9, 22, 31, 0.3)',
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 1%, var(--tealish-10))'
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 21,
        marginTop: 74,
    },
    available: {
        marginLeft: 36
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: 'normal',
        color: '#333333',
        marginBottom: 17,
    },
    textField: {
        width: '100%',
        marginBottom: 12
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.79,
        letterSpacing: 'normal',
        color: '#333333',
    },
    circle: {
        width: 210,
        height: 210,
        position: 'relative',
        margin: '38px auto 50px auto'
    },
    button: {
        height: 52,
        background: '#5acaee',
        color: '#fff',
        width: '100%',
        ontSize: 12,
        fontWeight: 'bold',
        '&:hover': {
            background: '#5acaee'
        }
    },
    cancel: {
        fontSize: 15,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.79,
        letterSpacing: 'normal',
        color: '#22a8d2',
        cursor: 'pointer'
    },
    back: {
        cursor: 'pointer'
    },
    data1: {
        position: 'absolute',
        top: 34,
        right: 51,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data2: {
        position: 'absolute',
        top: 68,
        right: 24,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data3: {
        position: 'absolute',
        top: 100,
        right: 18,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data4: {
        position: 'absolute',
        top: 133,
        right: 24,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data5: {
        position: 'absolute',
        bottom: 34,
        right: 51,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data6: {
        position: 'absolute',
        bottom: 18,
        right: 100,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data7: {
        position: 'absolute',
        bottom: 34,
        left: 51,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data8: {
        position: 'absolute',
        top: 133,
        left: 24,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data9: {
        position: 'absolute',
        top: 100,
        left: 18,
        width: 15, 
        height: 15,
        zIndex: 1
    },
    data10: {
        position: 'absolute',
        bottom: 133,
        left: 24,
        width: 15,
        height: 15,
        zIndex: 1
    },
    data11: {
        position: 'absolute',
        top: 34,
        left: 51,
        width: 10,
        height: 10,
        zIndex: 1
    },
    data12: {
        position: 'absolute',
        top: 18,
        left: 100,
        width: 15,
        height: 15,
        zIndex: 1
    }

})