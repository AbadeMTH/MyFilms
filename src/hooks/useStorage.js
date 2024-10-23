import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = () => {
    const saveFilm = async (key, value) => {
        try {
            let films = await getFilm(key)

            films.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(films))
        } catch (error) {
            console.log(error)
        }
    }

    const getFilm = async (key) => {
        try {
            const films = await AsyncStorage.getItem(key)
            return JSON.parse(films) || []
        } catch (error) {
            console.log(error)
            return []
        }
    }

    const removeFilm = async (key, item) => {
        try {
            let films = await getFilm(key)

            let myFilms = films.filter((film) => film.id!== item.id)

            await AsyncStorage.setItem(key, JSON.stringify(myFilms))
            return myFilms
        } catch (error) {
            console.log(error)
        }
    }

    return { saveFilm, getFilm, removeFilm }
}

export default useStorage
