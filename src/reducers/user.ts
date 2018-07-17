import { 
    GET_USER_SCANS, 
    GET_USER_SCANS_SUCCESS, 
    GET_USER_SCANS_FAILURE,
    CREATE_SCAN,
    CREATE_SCAN_SUCCESS,
    CREATE_SCAN_FAILURE,
} from '../actions/user'
import { Map, List } from 'immutable'

/**
 * User initial state.
 */
const initialState = () => {
    return Map({
        scans: Map({
            data: List(),
            isFetching: false,
            isCreating: false,
        })
    })
}

export default (state = initialState(), action) => {
    switch(action.type) {
        case GET_USER_SCANS:
            return state.setIn(['scans', 'isFetching'], true)
        case GET_USER_SCANS_SUCCESS:
            return state.setIn(['scans', 'isFetching'], false)
            .setIn(['scans', 'data'], action.scans)
        case GET_USER_SCANS_FAILURE:
            return state.setIn(['scans', 'isFetching'], false)
        case CREATE_SCAN:
            return state.setIn(['scans', 'isCreating'], true)
        case CREATE_SCAN_SUCCESS:
            return state.setIn(['scans', 'isCreating'], false)
        case CREATE_SCAN_FAILURE:
            return state.setIn(['scans', 'isCreating'], false)
    }

    return state
}