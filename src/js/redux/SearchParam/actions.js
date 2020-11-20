import types from './types';

export const getPeople = (payload) => ({ payload, type: types.GET_PEOPLE });
export const setLoading = (isLoading) => ({ isLoading, type: types.SET_LOADING });