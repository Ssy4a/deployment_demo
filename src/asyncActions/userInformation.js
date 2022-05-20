export const fetchUserInformation = () => {
    return function (dispatch) {
        fetch("http://localhost:5000/auth/userInfo", {
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
            .then(json => dispatch({ type: "FETCH_USER_INFORMATION_SUCCESS", payload: json }))
            .catch(err => dispatch({ type: "FETCH_USER_INFORMATION_FAILURE", payload: err.message }))
    }
}