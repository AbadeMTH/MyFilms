import { StyleSheet } from "react-native";

export const stylesRating = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        padding: 8,
    }, 
    ratingText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 8,
        color: '#fff'
    }
})