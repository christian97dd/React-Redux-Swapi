import types from './types';

const initialState = {
    isLoading: false,
    people: {},
};

export default function searchParam(state = initialState, action) {
    switch(action.type) {
        case (types.SET_LOADING):
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case (types.GET_PEOPLE):
            console.log(action.type, action.payload);
            return {
                ...state,
                people: action.payload,
                isLoading: true
            };
        default:
            return state;
    }
}