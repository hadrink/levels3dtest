export const GET_USER_SCANS = 'GET_USER_SCANS'
export const GET_USER_SCANS_SUCCESS = 'GET_USER_SCANS_SUCCESS'
export const GET_USER_SCANS_FAILURE = 'GET_USER_SCANS_FAILURE'

export const CREATE_SCAN = 'CREATE_SCAN'
export const CREATE_SCAN_SUCCESS = 'CREATE_SCAN_SUCCESS'
export const CREATE_SCAN_FAILURE = 'CREATE_SCAN_FAILURE'
import { List } from 'immutable'

/**
 * Get user scan action.
 */
export function getUserScans() {
    return {
        type: GET_USER_SCANS
    }
}

/**
 * Get user scan success action.
 * @param scans 
 */
export function getUserScansSuccess(scans: List<Object>) {
    return {
        type: GET_USER_SCANS_SUCCESS, scans
    }
}

/**
 * Get user scan failure action.
 * @param error 
 */
export function getUserScansFailure(error: Error) {
    return {
        type: GET_USER_SCANS_FAILURE, error
    }
}

/**
 * Create scan action.
 */
export function createScan() {
    return {
        type: CREATE_SCAN
    }
}

/**
 * Create scan success action.
 * @param scan 
 */
export function createScanSuccess(scan: Object) {
    return {
        type: CREATE_SCAN_SUCCESS, scan
    }
}

/**
 * Create scan failure action.
 * @param error 
 */
export function createScanFailure(error: Error) {
    return {
        type: CREATE_SCAN_FAILURE, error
    }
}