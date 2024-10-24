import { StyleSheet } from "react-native"

export const stylesModalAddFilm = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(24, 24, 24, 0.8)",
        position: "relative",
        flexGrow: 1,
        width: '100%'
    },
    content: {
        width: "80%",
        maxHeight: "80%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
        justifyContent: "space-between",
        backgroundColor: "#024CAA",

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
        color: "#fff",
    },
    labelInput: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#fff",
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
        color: "#fff",
        marginBottom: 16,
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
    buttonsContainer: {
        marginTop: 16,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    scrollView: {
        backgroundColor: 'rgba(9, 16, 87, 0.5)',
        borderRadius: 8,
        paddingTop: 24,
        padding: 16,
        overflow: 'hidden',
        width: '100%',
    }
})
