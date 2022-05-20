const defaultState = {
    isAuthorized: true,
    userInformation: null,
    error: null
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_AUTHORIZED_CHECK":
            return { ...state, isAuthorized: action.payload }

        case "FETCH_USER_INFORMATION_SUCCESS":
            console.log(action.payload)
            return { ...state, userInformation: action.payload }

        case "FETCH_USER_INFORMATION_FAILURE":
            return { ...state, error: action.payload }

        default:
            return state
    }
}