import { all } from 'redux-saga/effects';

import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../consts/actionTypes';

export default function* searchMovie({
    payload}) {
        try {
            
        } catch (error) {
            
        }
    }
//aca estamos exportando la funcion global buscar, donde le decimos 
//que cuando llamemos a la variable global, estamos haciendo referencia
//a la funcion searchMovie saga
    export default function* search() {
        yield takeLatest(SEARCH_MOVIE_START, searchMovie)
    }