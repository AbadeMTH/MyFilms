import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = () => {
    const getFilm = async (key) => {
        // Função assíncrona que faz um get na lista de filmes do AsyncStorage por meio de uma chave
        try {
            const films = await AsyncStorage.getItem(key) /// Pega os filmes existentes e os salva em uma variável
            return JSON.parse(films) || [] // Transforme o JSON em um array de objetos ou retorne um array vazio caso não exista nenhum item salvo
        } catch (error) {
            console.log("erro getfilm" + error)
            return []
        }
    }

    const saveFilm = async (key, value) => {
        // Função assíncrona que salva um novo filme no AsyncStorage por meio de uma chave e dados do filme
        try {
            let films = await getFilm(key) // Pega os filmes existentes e os salva em uma variável

            films.push(value) // Adicione o novo filme ao array de filmes

            // Salva o novo array de filmes no AsyncStorage passando a chave e uma string JSON, stringify transforma o array em um JSON
            await AsyncStorage.setItem(key, JSON.stringify(films))
        } catch (error) {
            console.error("Error saving data", error)
        }
    }

    const removeFilm = async (key, item) => {
        // Função assíncrona que remove um filme do AsyncStorage por meio de uma chave e dados do filme especifico
        try {
            let films = await getFilm(key) // Pega os filmes existentes e os salva em uma variável

            let myFilms = films.filter(
                (film) => film.id !== item.id
            ) /* Remove o filme especifico do array de filmes por meio do filter, 
            utilizando uma condição que se o id do film filtrado for diferente do id do filme que desejamos remover ele é adicionado na lista,
            caso contrário ele não é adicionado, após isso salvamos a nova lista sem o id identificado como igual, assim, removendo o filme */

            // Salva a nova lista de filmes no AsyncStorage passando a chave e uma string JSON, stringify transforma o array em um JSON
            await AsyncStorage.setItem(key, JSON.stringify(myFilms))
            return myFilms //Retorna a lista sem o filme removido para que o usuário possa ver a lista atualizada
        } catch (error) {
            console.log("error delete" + error)
        }
    }

    const updateFilm = async (key, item) => {
        // Função assíncrona que atualiza um filme do AsyncStorage por meio de uma chave e dados do filme especifico
        try {
            let films = await getFilm(key) // Pega os filmes existentes e os salva em uma variável

            let myFilms = films.map(
                // Utiliza o map para percorrer cada item do array e substitui o item correspondente pelo novo item
                (film) => (film.id === item.id ? item : film)
            )

            // Salva a nova lista de filmes no AsyncStorage passando a chave e uma string JSON, stringify transforma o array em um JSON
            await AsyncStorage.setItem(key, JSON.stringify(myFilms))
        } catch (error) {}
    }

    const searchFilm = async (key, filmName) => {
        // Função assíncrona que procura por um filme especifico
        try {
            let films = await getFilm(key) // Pega os filmes existentes e os salva em uma variável

            let myFilms = films.filter(
                (film) => film.film.toLowerCase() === filmName.toLowerCase()
            ) //Filtra o filme pelo nome e retorna pra lista, utilizando o toLowerCase para ignorar capslocks

            return myFilms //Retorna a lista sem o filme encontrado para que o usuário possa ver a lista atualizada
        } catch (error) {}
    }

    return { saveFilm, getFilm, removeFilm, updateFilm, searchFilm }
}

export default useStorage
