import { PLUS_REQUEST, MINUS_REQUEST, PLUS_SUCCESS,  MINUS_SUCCESS, FAILURE } from './index'

export const plusRequest = () => {
    return {
        type: PLUS_REQUEST
    }
};

export const minusRequest = () => {
    return {
        type: MINUS_REQUEST
    }
};


export const plusSuccess = () => {
    return {
        type: PLUS_SUCCESS
    }
};

export const minusSuccess = () => {
    return {
        type: MINUS_SUCCESS
    }
};


export const failure = () => {
    return {
        type: FAILURE
    }
};
