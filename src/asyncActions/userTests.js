import { UrlAPI } from './../constants';

export const fetchUserTests = (userId) => {
    return function (dispatch) {
        dispatch({ type: "SET_USER_TESTS_IS_LOADING", payload: true })
        fetch(`${UrlAPI}/tests/userTests/${userId}`, {
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
            .then(json => dispatch({ type: "GET_USER_TESTS_SUCCESS", payload: json }))
            .catch(err => dispatch({ type: "GET_USER_TESTS_FAILURE", payload: err.message }))
            .finally(() => dispatch({ type: "SET_USER_TESTS_IS_LOADING", payload: false }))
    }
}