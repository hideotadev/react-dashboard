import { PLUS_REQUEST, PLUS_SUCCESS, MINUS_REQUEST, MINUS_SUCCESS, FAILURE  } from "../actions";

const Initial_State = {
    value: 0,
    loading: false,
    error: null
};

const counter = (state = Initial_State, action) => {
    switch (action.type) {
        case PLUS_REQUEST:
            return {
                ...state, loading: true,
            }
        case PLUS_SUCCESS:
            return {
                ...state, loading: false, value: state.value + 1
            }
        case MINUS_REQUEST:
            return {
                ...state, loading: true
            }
        case MINUS_SUCCESS:
            return {
                ...state, loading: false, value: state.value - 1
            }
        case FAILURE:
            return {
                ...state, loading: false, error: 'failed'
            }

        default: return state
    }
};

export default counter;