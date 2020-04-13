function handleError(err) {
    console.log('caught it!', err)
}

function handleResponse (response) {
    if (response.status >= 400) {
        throw new Error("Bad response from server")
    }
    return response.json()
}

module.exports = {
    handleError,
    handleResponse
}