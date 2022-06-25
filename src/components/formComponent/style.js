import { StyleSheet } from "react-native";
import color from './../../../contains/color'

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        height: 44,
        width: '80%',
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#114726'
    },
    icon: {
        color: 'white',
        fontSize: 24,
    }
})

export default styles