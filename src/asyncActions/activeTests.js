export const fetchActiveTests = () => {
    return function (dispatch) {
        fetch("http://localhost:5000/tests/activeTests", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else return res.json().then(function (object) {
                    throw Error(object.message)
                })
            })
            .then(json => dispatch({ type: "GET_ACTIVE_TESTS_SUCCESS", payload: json }))
            .catch(err => dispatch({ type: "GET_ACTIVE_TESTS_FAILURE", payload: err.message }))
            .finally(() => dispatch({ type: "SET_ACTIVE_TESTS_IS_LOADING", payload: false }))
    }
}