import { StyleSheet } from "react-native"

export const stylesModalAddFilm = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(24, 24, 24, 0.8)",
    },
    content: {
        width: "80%",
        height: "60%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
        justifyContent: "center",
        backgroundColor: "#024CAA",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#DBD3D3",
    },
    labelInput: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#DBD3D3",
    },
    input: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#EC8305",
        height: 40,
        opacity: 0.8,
        paddingHorizontal: 15, // Espaçamento lateral
        paddingTop: 10, // Espaçamento superior
        paddingBottom: 10, // Espaçamento inferior
    },
    inputContainer: {
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 30,
        paddingTop: 10,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#DBD3D3",
        backgroundColor: "#091057",
        width: "100%",
        textAlign: "center",
        borderRadius: 8,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
})
