/**
 * Get users scans query.
 */
const getUserScansQuery = { 
    "query": "{ user { scans { id name room comment creationDate project { name } } } }" 
}

export default getUserScansQuery