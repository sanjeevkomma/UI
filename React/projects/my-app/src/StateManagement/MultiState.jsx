import React, {useEffect, useReducer} from 'react';

// types
const FETCH_INIT = 'FETCH_INIT';
const FETCH_START = 'FETCH_START';
const FETCH_ERROR = 'FETCH_ERROR';

const GET_user_uri = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    data: null,
    loading: true,
    error: null,
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return {
                ...state, loading: true, error: null
            }
        case FETCH_START:
            return {
                ...state, loading: false, data: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        default:
            return state;
    }
}

const MultiState = () => {

    const [state, dispatch] = useReducer(dataReducer, initialState);

    const dataHandler = async () => {
        try {
            dispatch({type: FETCH_INIT});
            const response = await fetch(GET_user_uri);
            const responseJson = await response.json();
            dispatch({type: FETCH_START, payload: responseJson});
        } catch (error) {
            dispatch({type: FETCH_ERROR, payload: error.message});
        }
    }

    useEffect(() => {
        // console.log(dataHandler());
        dataHandler()

    }, []);

    return (
        <div>
            {state.loading && <p>Loading.....</p>}
            {state.data &&
                <div>
                    {state.data.map((item) => {
                            return (
                                <div>
                                    <h2>{item.name}</h2>
                                </div>
                            )
                        }
                    )}
                </div>
            }
            {state.error && <div> { alert(state.error) } </div>}
        </div>
    );
}

export default MultiState;