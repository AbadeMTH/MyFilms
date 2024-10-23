import React, { useState } from "react"
import { FlatList, Modal, ScrollView, Text, View } from "react-native"
import { stylesHomeScreen as styles } from "./style"
import { Header } from "./components/header/header"
import { Card } from "../../components/card/card"
import { AddCard } from "../../components/addCard/addCard"
import { ModalAddFilm } from "./components/modalAddFilm/modalAddFilm"
import { filmList } from "../../data/mockup"

export function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedFilm, setSelectedFilm] = useState(null)

    function addFilm() {
        setSelectedFilm(null)
        setModalVisible(true)
    }

    function editFilm(filmData) {
        setSelectedFilm(filmData)
        setModalVisible(true)
    }

    function renderItem({item}){
        return <Card
        filmList={filmList}
        onPress={() => editFilm(item)}
        {...item}
    />
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
                style={{ width: '100%', paddingRight: 10, paddingLeft: 10 }}
                contentContainerStyle={{alignItems: "center" }}
                data={filmList}
                keyExtractor={filmList.film}
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
