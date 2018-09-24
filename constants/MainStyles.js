import { StyleSheet, Platform } from 'react-native';

const MainStyles = StyleSheet.create({
    offsetStatusBar: {
        paddingTop: 30,
    },
    postEditor: {
        backgroundColor: '#FF1C53',
        height: 55,
        marginTop: Platform === 'ios' ? 20 : 24, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    pageContainer: {
        backgroundColor: '#F9F9F9',
        flex: 1
    },
    postInput: {
        borderColor: '#FF6302'
    }
});

export default MainStyles;