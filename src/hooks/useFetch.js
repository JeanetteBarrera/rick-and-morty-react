import { useCallback, useEffect, useReducer } from 'react';
import { API } from '../API';
import { ACTIONS } from '../components/actions/fetch';
import { fetchReducer, initialState } from '../components/reducers/fetch';

export const useFetch = (endpoint) => {

    /*const [ loading, setLoading ] = useState(true); //definimos loader 
    const [ data, setData ] = useState({}); // pedidos por fetch
    const [ error, setError ] = useState(false); // msj de error
    */

    const [ state, dispatch ] = useReducer(fetchReducer, initialState);
    //state -> estado
    //dispatch -> metodo -> mediante acciones actualizamos el reducer (state)
    
    const getData = useCallback(async() => { //memoriza la función

        try {

            const { data } = await API.get(`${endpoint}`)
            dispatch({type: ACTIONS.SET_DATA, payload: data})
            
            /*setData(data)
            setLoading(false)*/

        } catch (error) {
            console.error(error)
            //setError(true)
            dispatch({type: ACTIONS.SET_ERROR})
        }
        
    },[ endpoint, ])

    useEffect(() => {

        getData();

    },[endpoint, getData]);

    return state
}