import React, { useEffect, useState } from "react"
import { Alert, FlatList, Modal, Text, View } from "react-native"
import { stylesHomeScreen as styles } from "./style"
import { Header } from "./components/header/header"
import { Card } from "../../components/card/card"
import { AddCard } from "../../components/addCard/addCard"
import { ModalAddFilm } from "./components/modalAddFilm/modalAddFilm"
import useStorage from "../../hooks/useStorage"

export function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [modalEditable, setModalEditable] = useState(false)
    const [filmList, setFilmList] = useState([])
    const { getFilm } = useStorage()
    const [updateFlag, setUpdateFlag] = useState(false)

    function addFilm() {
        setSelectedFilm(null)
        setModalVisible(true)
    }

    function editFilm(filmData) {
        setSelectedFilm(filmData)
        setModalEditable(true)
        setModalVisible(true)
    }

    useEffect(() => {
        async function loadFilms() {
            const films = await getFilm("@films")
            if (films) {
                setFilmList(films)
            }
        }
        loadFilms()
    }, [updateFlag])

    function renderItem({ item }) {
        return <Card onPress={() => editFilm(item)} {...item} />
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
                        setModalEditable(false)
                        setModalVisible(false)
                        setTimeout(() => {
                            setUpdateFlag((prev) => !prev)
                        }, 300)
                    }}
                    _id={selectedFilm?.id}
                    _film={selectedFilm?.film}
                    _notes={selectedFilm?.notes}
                    _rating={selectedFilm?.rating}
                    _time={selectedFilm?.time}
                    isEditable={modalEditable}
                />
            </Modal>
        </View>
    )
}
