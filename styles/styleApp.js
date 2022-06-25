import { StyleSheet } from "react-native";
import color from './../contains/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff4a',
    },
    body: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        color: color.primary,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 25
    },
})

export default styles