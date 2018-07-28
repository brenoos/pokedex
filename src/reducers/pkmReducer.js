const INITIAL_STATE = {
    filter: '',
    pkm: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LISTA_CONSULTADA':
            return 'OK'
        default:
            return state
    }
}