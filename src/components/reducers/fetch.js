// Función Pura? Para una entrada una salida X retorna una salida Y y siempre Retorna Algo

import { ACTIONS } from '../actions/fetch'

export const initialState = {
    loading : true,
    error : false,
    data : {}
};

//EL ESTADO SE MODIFICA ATRAVEZ DE UNA ACCIÓN
export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return {
                ...initialState,
                loading : false,
                error : false,
                data : {
                    info: action.payload.info,
                    results: action.payload.results,
                }
            }
        case ACTIONS.SET_ERROR:
            return {
                error : true,
                loading : true,
                ...initialState
            }
        default:
            return state;
    }
}