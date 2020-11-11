import types from './types';

const initialState = {
    isLoading: false,
    isInputEmpty: true,
    results: []
};

export default function searchParam(state = initialState, action) {
    switch(action.type) {
        case (types.UPDATE_LOADING):
            return {
                ...state,
                isLoading: action.payload
            };
        case (types.SET_SEARCH_PARAM):
            return {
                ...state,
                results: action.results,
                isLoading: action.payload
            };
        case (types.UPDATE_INPUT_EMPTY):
            return {
                ...state,
                isInputEmpty: action.payload
            }
        default:
            return state;
    }
}