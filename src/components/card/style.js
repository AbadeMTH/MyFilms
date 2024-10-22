import { StyleSheet } from "react-native"

export const stylesCard = StyleSheet.create({
    card: {
        width: "90%",
        marginTop: 32,
        marginBottom: 16,
    },
    cardHeader: {
        backgroundColor: "#091057",
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
    },
    filmText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },

    cardContentNotes: {
        marginTop: -1,
        backgroundColor: "#024CAA",
        height: 150,
        opacity: 0.8,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: "space-between",
    },
    cardContent: {
        marginTop: -1,
        backgroundColor: "#024CAA",
        height: 75,
        opacity: 0.8,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        justifyContent: "center",
        alignContent: "center",
    },
    notes: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10,
        height: 64,
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
    },
    timeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    time: {
        color: "#EC8305",
        fontSize: 12,
        fontWeight: "bold",
    },
})