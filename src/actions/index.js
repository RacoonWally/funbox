import {
    FETCH_DATA
} from '../actonTypes'
import {
    getList
} from '../service/'


export const fetchData = () => dispatch => {
    const getItems = getList("data");
    dispatch({
        type: FETCH_DATA,
        payload: getItems
    })
};
