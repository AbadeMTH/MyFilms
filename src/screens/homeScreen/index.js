import React, { useState } from "react"
import { Modal, ScrollView, Text, View } from "react-native"
import { stylesHomeScreen as styles } from "./style"
import { Header } from "./components/header/header"
import { Card } from "../../components/card/card"
import { AddCard } from "../../components/addCard/addCard"
import { ModalAddFilm } from "./components/modalAddFilm/modalAddFilm"

export function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false)

    function addFilm(){
        setModalVisible(true);
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

            <View style={{ flex: 1, width: "100%" }}>
                <ScrollView                     
                    contentContainerStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Card film={"The Matrix"} notes={"a"} tempo={"20 min"} />
                    <Card film={"The Lorax"} tempo={"20 min"} />
                    <Card film={"The Matrix"} notes={"a"} tempo={"20 min"} />
                    <Card film={"The Lorax"} tempo={"20 min"} />
                    <Card film={"The Matrix"} notes={"a"} tempo={"20 min"} />
                    <Card film={"The Lorax"} tempo={"20 min"} />
                    <Card film={"The Matrix"} notes={"a"} tempo={"20 min"} />
                    <Card film={"The Lorax"} tempo={"20 min"} />
                </ScrollView>
            </View>

            <AddCard onPress={addFilm} />

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalAddFilm closeModal={() => {setModalVisible(false)}}/>
            </Modal>
        </View>
    )
}
