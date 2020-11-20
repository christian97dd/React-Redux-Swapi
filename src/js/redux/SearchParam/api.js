import { getPeople, setLoading } from './actions';

export const fetchPeople = value => dispatch => {
    dispatch(setLoading(true));
    fetch('https://swapi.dev/api/people/1/')
        .then(data => data.json())
        .then(response => {
            console.log(response);
            dispatch(getPeople(response))
            dispatch(setLoading(false));
        })
}