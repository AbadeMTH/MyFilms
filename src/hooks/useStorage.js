import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = () => {
    const getFilm = async (key) => {
        try {
            const films = await AsyncStorage.getItem(key)
            return JSON.parse(films) || []
        } catch (error) {
            console.log('erro getfilm' + error)
            return []
        }
    }
    const saveFilm = async (key, value) => {
        try {
            let films = await getFilm(key)

            films.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(films))
        } catch (error) {
            console.error("Error saving data", error)
        }
    }

    const removeFilm = async (key, item) => {
        try {
            let films = await getFilm(key)

            let myFilms = films.filter((film) => film.id !== item.id)

            await AsyncStorage.setItem(key, JSON.stringify(myFilms))
            return myFilms
        } catch (error) {
            console.log('error delete' + error)
        }
    }

    const updateFilm = async (key, item) => {
        try {
            let films = await getFilm(key)

            let myFilms = films.map((film) =>
                film.id === item.id ? item : film // Substitua o filme existente pelo novo
            );
            
            await AsyncStorage.setItem(key, JSON.stringify(myFilms))
        } catch (error) {
            
        }
    }


    return { saveFilm, getFilm, removeFilm, updateFilm }
}

export default useStorage
