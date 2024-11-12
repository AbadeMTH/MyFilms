import { StyleSheet } from "react-native"

export const stylesHeader = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#091057",
        height: 75,
    },
    logo: {
        width: 50,
        height: 50,
        marginLeft: 40,
        marginTop: 13,
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 13,
        color: "#DBD3D3",
    },
})
