export default class FetchOperation {
    constructor() {
        this.data = {}
    }

    withHeaders(headers) {
        this.data = { ...this.data, headers }
        return this
    }
    
    withJSONHeaders() {

        this.data = { ...this.data, 
                        headers:{
                            'Content-type': 'application/json; charset=UTF-8',    
                         }
                    }
        return this
    }

    PATCH() {

        this.data = { ...this.data, method: "PATCH"}
        return this
    }

    POST() {

        this.data = { ...this.data, method: "POST"}
        return this

    }

    PUT() {

        this.data = { ...this.data, method: "PUT"}
        return this
    }

    DELETE() {

        this.data = { ...this.data, method: "DELETE"}
        return this
    }

    withBody(body) {
        this.data = { ...this.data, body:JSON.stringify(body) }
        return this
    }

    withMethod(method) {
        this.data = { ...this.data, method }
        return this
    }
    
    withCache(cache) {
        this.data = { ...this.data, cache }
        return this
    }

    withCredentials() {
        this.data = { ...this.data, }
        return this
    }

    getJson() {
        this.data = { ...this.data, headers:{
            'Accept': 'application/json'
        }, method: 'GET' } 
        return this
    }

    withMode(mode) {
        this.data = { ...this.data, mode }
        return this
    }


    async getResponse(url) {
        const response = await fetch(url, this.data)
        const data = await response.json()
        return data
    }
}