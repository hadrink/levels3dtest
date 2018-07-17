import { 
    getUserScans, 
    getUserScansSuccess, 
    getUserScansFailure,
    createScan,
    createScanSuccess,
    createScanFailure,
} from '../actions/user'
import { List } from 'immutable'

/**
 * Get user scans thunk.
 */
export function getUserScansThunk() {
    return (dispatch, getState, apiClient) => {
        return new Promise((resolve, reject) => {

            dispatch(getUserScans())

            apiClient.getUserScans()
                .then(scansData => {
                    const scans = List(scansData.data.user.scans)
                    dispatch(getUserScansSuccess(scans))
                    resolve()
                })
                .catch(e => {
                    dispatch(getUserScansFailure(e))
                    reject(e)
                })
        })
    }
}

/**
 * Create scan thunk.
 * @param name 
 * @param room 
 * @param comment 
 */
export function createScanThunk(name: string, room: string, comment: string) {
    return (dispatch, getState, apiClient) => {
        return new Promise((resolve, reject) => {

            dispatch(createScan())

            apiClient.createScan(name, room, comment)
                .then(data => {
                    const scan = data
                    dispatch(createScanSuccess(data))
                    resolve()
                })
                .catch(e => {
                    dispatch(createScanFailure(e))
                    reject(e)
                })
        })
    }
}