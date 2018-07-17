import { API_URL} from './config'
import getUserScansQuery from './queries/getUserScansQuery'
import postUserScanQuery from './queries/postUserScanQuery'

/// API client
export default class APIClient {

    /**
     * Get default headers.
     */
    private getDefaultHeaders(): Headers {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return headers
    }

    /**
     * Get user scans.
     */
    getUserScans() {
        return new Promise((resolve, reject) => {
            const baseURL = API_URL
            const headers = this.getDefaultHeaders()
            const query = getUserScansQuery

            return fetch(baseURL, {
                headers,
                method: 'POST',
                body: JSON.stringify(query),
                mode: 'cors'
            })
            .then(response => {
                if (response.ok) {
                    response.json().then(data => resolve(data))
                }
            })
            .catch(error => {
                console.error(error)
                reject(error)
            })
        })
    }
    
    /**
     * Create scan.
     * @param name 
     * @param room 
     * @param comment 
     */
    createScan(name: string, room: string, comment: string) {
        return new Promise((resolve, reject) => {
            const baseURL = API_URL
            const headers = this.getDefaultHeaders()
            const query = postUserScanQuery(name, room, comment)

            return fetch(baseURL, {
                headers,
                method: 'POST',
                body: JSON.stringify(query),
                mode: 'cors'
            })
            .then(response => {
                if (response.ok) {
                    response.json().then(data => resolve(data))
                }
            })
            .catch(error => {
                console.error(error)
                reject(error)
            })
        })
    }
}