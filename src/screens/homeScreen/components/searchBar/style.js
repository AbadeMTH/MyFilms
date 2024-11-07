import { StyleSheet } from "react-native";

export const stylesSearchBar = StyleSheet.create({
    container: {
        backgroundColor: '#DBD3D3',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        marginRight: 16,
    },
    buttonSearch: {
    }
})