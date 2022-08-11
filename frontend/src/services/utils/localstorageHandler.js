class localstorageHandler {
    get(keyword) {
        return localStorage.getItem(keyword)
    }

    store(keyword, value) {
        return localStorage.setItem(keyword, value)
    }

    remove(keyword) {
        return localStorage.removeItem(keyword)
    }
}

export default new localstorageHandler();