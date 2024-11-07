import React, { useEffect, useState } from "react"
import { FlatList, Modal, View } from "react-native"
import { stylesHomeScreen as styles } from "./style"
import { Header } from "./components/header/header"
import { Card } from "../../components/card/card"
import { AddCard } from "../../components/addCard/addCard"
import { ModalForm } from "./components/modalForm/modalForm"
import useStorage from "../../hooks/useStorage"
import { Title } from "./components/title/title"
import { SearchBar } from "./components/searchBar/searchBar"

export function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedFilm, setSelectedFilm] = useState(null) // Utilizado para armazenar o filme selecionado para edição
    const [modalEditable, setModalEditable] = useState(false)
    const [filmList, setFilmList] = useState([])
    const [updateFlag, setUpdateFlag] = useState(false)

    const { getFilm, searchFilm } = useStorage() // Importando o hook de armazenamento

    useEffect(() => {
        //Carrega os filmes ao iniciar o aplicativo e também quando o updateFlag é alterado
        async function loadFilms() {
            const films = await getFilm("@films")
            if (films) {
                //Caso falso, o padrão é um array vazio
                setFilmList(films)
                console.log(films)
            }
        }
        loadFilms()
    }, [updateFlag])

    function addFilm() {
        // Função que prepara para adicionar um novo filme
        setSelectedFilm(null)
        setModalVisible(true)
    }

    function editFilm(filmData) {
        // Função que prepara para editar um filme existente, passando os dados do filme como parametro
        setSelectedFilm(filmData)
        setModalEditable(true)
        setModalVisible(true)
    }

    async function searchFilms(filmName) {
        if (filmName) {
            const films = await searchFilm("@films", filmName)
            if (films.length != 0) {
                setFilmList(films)
            } else {
                setFilmList([])
            }
        } else {
            setTimeout(() => {
                setUpdateFlag((prev) => !prev)
            }, 300)
        }
    }

    function closeModal() {
        // Função que fecha a modal, tira todas as flags e atualiza a lista depois de 0.3s
        setSelectedFilm(null)
        setModalEditable(false)
        setModalVisible(false)
        setTimeout(() => {
            setUpdateFlag((prev) => !prev)
        }, 300)
    }

    function renderItem({ item }) {
        // Função que renderiza cada item da lista, é usado para aprimorar a eficiência da lista
        return <Card onPress={() => editFilm(item)} {...item} />
    }

    function renderListHeader() {
        return (
            <>
                <Header headerText="My Films" />
                <View style={styles.searchContainer}>
                    <SearchBar onPress={searchFilms} />
                    <Title title="Filmes" />
                </View>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                contentContainerStyle={{ alignItems: "center" }}
                data={filmList}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
                ListHeaderComponent={renderListHeader}
                refreshing={false}
                onRefresh={() => setUpdateFlag((prev) => !prev)}
            />

            <AddCard onPress={addFilm} />

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <ModalForm
                    closeModal={closeModal}
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
