import { Dimensions, StyleSheet } from "react-native"

const windowWidth = Dimensions.get("window").width

export const stylesTitle = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth,
    },
    filmsText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 15,
    },
    line: {
        backgroundColor: "#000",
        height: 2,
        marginTop: 15,
        width: windowWidth * 0.9,
    },
})
