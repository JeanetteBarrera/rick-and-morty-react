import { useCallback, useEffect, useState } from 'react';
import { API } from '../API';

export const useFetch = (endpoint) => {

    const [ loading, setLoading ] = useState(true); //definimos loader 
    const [ data, setData ] = useState({}); // pedidos por fetch
    const [ error, setError ] = useState(false); // msj de error

    const getData = useCallback(async() => { //memoriza la función

        try {

            const { data } = await API.get(`${endpoint}`)
            setData(data)

        } catch (error) {
            console.error(error)
            setError(true)
        }
        
    },[ endpoint, ])

    useEffect(() => {

        getData();

    },[endpoint, getData]);

    return [ data, loading, error ]
}