import {
    FETCH_LISTA_REQUEST,
    FETCH_LISTA_SUCCESS,
    FETCH_LISTA_FAILURE
} from '../actions/actions';


const initialState = {
    muistiinpanoLista: { muistiinpanot: [], error: null, loading: false }
}

export default function(state = initialState, action) {
    let error;
    switch (action.type){

        case FETCH_LISTA_REQUEST:
            return { ...state, muistiinpanoLista: {muistiinpanot: [], error: null, loading: true}};
        case FETCH_LISTA_SUCCESS: {
            console.log("fetch success, yay", action.payload);
            return { ...state, muistiinpanoLista: { muistiinpanot: action.payload, error: null, loading: false }};
        }
        case FETCH_LISTA_FAILURE:
            error = action.payload.data || { message: action.payload.message };
            return { ...state, muistiinpanoLista: { muistiinpanot: [], error: error, loading: false}};
        default:
            return state;
    }
}
