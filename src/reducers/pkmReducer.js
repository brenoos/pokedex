const INITIAL_STATE = {
    filter: '',
    pkm: {},
    pkmList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'POKEMON_CONSULTADO':
            return {...state, pkm: action.payload}
        case 'LISTA_CRIADA':
            return {...state, pkmList: action.payload}
        default:
            return state
    }
}