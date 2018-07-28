import axios from 'axios'

const URL_API = 'https://pokeapi.co/api/v2'

export const consultaPokemon = (number) => {
    return dispatch => {
        axios.get(`${URL_API}/pokemon/${number}`)
            .then(resp => {
                dispatch({ type: 'POKEMON_CONSULTADO', payload: resp.data})
            })
    }
}
export const geraLista = () => {
    return dispatch => {
        axios.get(`${URL_API}/pokemon/?limit=802&offset=0`)
            .then(resp => {
                dispatch({type: 'LISTA_CRIADA', payload: resp.data.results})
            })
    }
}