const INITIAL_STATE = {
    filter: '',
    pkmInfo: {},
    pkmList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'POKEMON_CONSULTADO':
            return {...state, pkmInfo: action.payload}
        case 'LISTA_CRIADA':
            return {...state, pkmList: action.payload}
        default:
            return state
    }
}