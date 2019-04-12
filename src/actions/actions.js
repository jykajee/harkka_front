import {RSAA} from 'redux-api-middleware';


/* action tyypit */

export const FETCH_LISTA_REQUEST = 'FETCH_LISTA_REQUEST';
export const FETCH_LISTA_SUCCESS = 'FETCH_LISTA_SUCCESS';
export const FETCH_LISTA_FAILURE = 'FETCH_LISTA_FAILURE';

/* muut constantit */


/* action creators */

export const fetchLista = () => ({
    [RSAA]: {
        types: [FETCH_LISTA_REQUEST, FETCH_LISTA_SUCCESS, FETCH_LISTA_FAILURE],
        endpoint: 'http://localhost:8080/api/muistiinpanot/',
        method: 'GET',
    }
});

