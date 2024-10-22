import { StyleSheet } from "react-native"

export const stylesHeader = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#091057",
        width: "100%",
        height: 75,
    },
    logo: {
        width: 50,
        height: 50,
        marginLeft: 25,
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
