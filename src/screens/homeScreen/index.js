import React, { useEffect, useState } from "react"
import { Alert, FlatList, Modal, Text, View } from "react-native"
import { stylesHomeScreen as styles } from "./style"
import { Header } from "./components/header/header"
import { Card } from "../../components/card/card"
import { AddCard } from "../../components/addCard/addCard"
import { ModalAddFilm } from "./components/modalAddFilm/modalAddFilm"
import useStorage from "../../hooks/useStorage"
import { useIsFocused } from "@react-navigation/native"

export function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [filmList, setFilmList] = useState(filmList)
    const { getFilm, removeFilm } = useStorage()

    function addFilm() {
        setSelectedFilm(null)
        setModalVisible(true)
    }

    function editFilm(filmData) {
        setSelectedFilm(filmData)
        setModalVisible(true)
    }

    async function deleteFilm(film) {
        Alert.alert("Deletar Filme", "Deseja excluir este Filme?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Sim",
                style: "default",
                onPress: async () => {
                    const films = await removeFilm("@films", film)
                    if (films) {
                        setFilmList(films)
                    } else {
                        setFilmList([])
                    }
                },
            },
        ])
    }

    useEffect(() => {
        async function loadFilms() {
            const films = await getFilm("@films")
            if (films) {
                setFilmList(films)
            } else {
                setFilmList([])
            }
        }
        loadFilms()
        console.log(filmList)
    }, [])

    function renderItem({ item }) {
        return (
            <Card
                onLongPress={() => deleteFilm(item)}
                onPress={() => editFilm(item)}
                {...item}
            />
        )
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.filmsContainer}>
                <Text style={styles.filmsText}>Filmes</Text>
                <View
                    style={{
                        width: "100%",
                        backgroundColor: "#000",
                        height: 1,
                        marginBottom: 16,
                    }}
                />
            </View>

            <FlatList
                style={{ width: "100%", paddingRight: 10, paddingLeft: 10 }}
                contentContainerStyle={{ alignItems: "center" }}
                data={filmList}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
            />

            <AddCard onPress={addFilm} />

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <ModalAddFilm
                    closeModal={() => {
                        setSelectedFilm(null)
                        setModalVisible(false)
                    }}
                    _film={selectedFilm?.film}
                    _notes={selectedFilm?.notes}
                    _rating={selectedFilm?.rating}
                    _time={selectedFilm?.time}
                />
            </Modal>
        </View>
    )
}
