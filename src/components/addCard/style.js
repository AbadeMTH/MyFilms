import { StyleSheet } from "react-native"

export const stylesAddCard = StyleSheet.create({
    button: {
        backgroundColor: "#EC8305",
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 17,
        right: 20,
        padding: 15,
        borderRadius: 50,
        elevation: 5, // sombra para Android
        shadowColor: "#000", // sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
})
