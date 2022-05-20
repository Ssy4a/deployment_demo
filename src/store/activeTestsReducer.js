const defaultState = {
    isLoading:true
}

export const ActiveTestsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_ACTIVE_TESTS_SUCCESS":
            return { ...state, tests: action.payload }
      
          case "GET_ACTIVE_TESTS_FAILURE":
            return { ...state, error: action.payload }
      
          case "SET_ACTIVE_TESTS_IS_LOADING":
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}