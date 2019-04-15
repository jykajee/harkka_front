import {
    FETCH_LISTA_REQUEST,
    FETCH_LISTA_SUCCESS,
    FETCH_LISTA_FAILURE,
    POST_MUISTIINPANO_REQUEST,
    POST_MUISTIINPANO_SUCCESS,
    POST_MUISTIINPANO_FAILURE,
    DELETE_MUISTIINPANO_SUCCESS,
    TOGGLE_ADD_MUISTIINPANO
} from '../actions/actions';


const initialState = {
    muistiinpanoLista: { muistiinpanot: [], error: null, loading: false, adding: false }
}

export default function(state = initialState, action) {
    let error;
    switch (action.type){

        case FETCH_LISTA_REQUEST:
            return { ...state, muistiinpanoLista: { ...state.muistiinpanoLista, muistiinpanot: [], error: null, loading: true}};
        case FETCH_LISTA_SUCCESS: 
            return { ...state, muistiinpanoLista: { ...state.muistiinpanoLista, muistiinpanot: action.payload, error: null, loading: false }};
        case FETCH_LISTA_FAILURE:
            error = action.payload.data || { message: action.payload.message };
            return { ...state, muistiinpanoLista: { muistiinpanot: [], error: error, loading: false}};
        case POST_MUISTIINPANO_SUCCESS:
            return {...state, muistiinpanoLista:
                {muistiinpanot: [action.payload, ...state.muistiinpanoLista.muistiinpanot], ...state.muistiinpanoLista}}
        case DELETE_MUISTIINPANO_SUCCESS:
            const mpanot = state.muistiinpanoLista.muistiinpanot.filter((mp) => { return mp.id !== action.payload})
            return {...state, muistiinpanoLista: {...state.muistiinpanoLista, muistiinpanot: mpanot, error: null, loading: false}}
        case TOGGLE_ADD_MUISTIINPANO:
            return {...state, muistiinpanoLista: {...state.muistiinpanoLista, adding: (state.muistiinpanoLista.adding === false) ? true : false }}
        default:
            return state;
    }
}
