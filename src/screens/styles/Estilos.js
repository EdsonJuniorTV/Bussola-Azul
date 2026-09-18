import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff' 
    },
    title: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 60, 
        color: '#333' 
    },
    headingText: { 
        fontSize: 32, 
        fontWeight: 'bold', 
        marginTop: 60, 
        color: '#0055ff' 
    },
    arrowUp: {
        width: 0,
        height: 0,
        borderLeftWidth: 40,
        borderRightWidth: 40,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#0055ff', // Azul
    },
    arrowBase: {
        width: 30,
        height: 50,
        backgroundColor: '#0055ff',
        alignSelf: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    quoteTitle: { 
        fontSize: 26, 
        fontWeight: 'bold', 
        marginBottom: 30, 
        color: '#e67e22' 
    },
    quoteText: { 
        fontSize: 22, 
        fontStyle: 'italic', 
        textAlign: 'center', 
        color: '#333', 
        lineHeight: 32 
    },
    text: { 
        fontSize: 18, 
        marginTop: 30, 
        color: '#555', 
        fontWeight: '500' 
    }
})