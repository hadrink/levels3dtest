/**
 * Post user scan query.
 * @param name 
 * @param room 
 * @param comment 
 */
function postUserScanQuery(name: string, room: string, comment: string): Object {
    const query = {
        "query": "mutation($input: ScanInput!) { createScan(input: $input) { id name room comment creationDate project { name } }}",
        "variables": {
            "input": {
                name,
                room,
                comment
            }
        }
    }

    return query
}

export default postUserScanQuery