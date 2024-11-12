import { StyleSheet } from "react-native"

export const stylesPersonalizedAlert = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(24, 24, 24, 0.8)",
        position: "relative",
        flexGrow: 1,
        width: "100%",
    },
    box: {
        backgroundColor: "#DBD3D3",
        width: "80%",
        padding: 24,
        borderRadius: 20,
    },
    textAlert: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#091057",
        width: "100%",
        textAlign: "center",
        borderRadius: 8,
        padding: 10,
    },
})
