import { StyleSheet } from "react-native"

export const stylesCard = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "#024CAA",
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 36,
        elevation: 6,
    },
    cardHeader: {
        backgroundColor: "#091057",
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        flexDirection: "row",
    },
    filmText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    editIcon: {
        position: "absolute",
        right: 20,
        top: 20,
        opacity: 0.5
    },
    cardContent: {
        backgroundColor: "#024CAA",
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        justifyContent: "center",
        alignContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },
    notes: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 15,
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
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
