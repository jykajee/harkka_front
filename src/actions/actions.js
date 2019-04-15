import {RSAA} from 'redux-api-middleware';


/* action tyypit */

export const FETCH_LISTA_REQUEST = 'FETCH_LISTA_REQUEST';
export const FETCH_LISTA_SUCCESS = 'FETCH_LISTA_SUCCESS';
export const FETCH_LISTA_FAILURE = 'FETCH_LISTA_FAILURE';
export const POST_MUISTIINPANO_REQUEST = 'POST_MUISTIINPANO_REQUEST';
export const POST_MUISTIINPANO_SUCCESS = 'POST_MUISTIINPANO_SUCCESS';
export const POST_MUISTIINPANO_FAILURE = 'POST_MUISTIINPANO_FAILURE';
export const DELETE_MUISTIINPANO_REQUEST = 'DELETE_MUISTIINPANO_REQUEST';
export const DELETE_MUISTIINPANO_SUCCESS = 'DELETE_MUISTIINPANO_SUCCESS';
export const DELETE_MUISTIINPANO_FAILURE = 'DELETE_MUISTIINPANO_FAILURE';
export const TOGGLE_ADD_MUISTIINPANO = 'TOGGLE_ADD_MUISTIINPANO';


/* muut constantit */


/* action creators */

export const fetchLista = () => ({
    [RSAA]: {
        types: [FETCH_LISTA_REQUEST, FETCH_LISTA_SUCCESS, FETCH_LISTA_FAILURE],
        endpoint: 'http://localhost:8080/api/muistiinpanot/',
        method: 'GET'
    }
});

export const postMuistiinpano = (data) => ({
    [RSAA]: {
        types: [POST_MUISTIINPANO_REQUEST, POST_MUISTIINPANO_SUCCESS, POST_MUISTIINPANO_FAILURE],
        endpoint: 'http://localhost:8080/api/muistiinpanot/',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
});

export const deleteMuistiinpano = (id) => ({
    [RSAA]: {
        types: [DELETE_MUISTIINPANO_REQUEST, DELETE_MUISTIINPANO_SUCCESS, DELETE_MUISTIINPANO_FAILURE],
        endpoint: 'http://localhost:8080/api/muistiinpanot/'+id,
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
});

export const toggleAddModal = () => {
    return {type: TOGGLE_ADD_MUISTIINPANO};
}