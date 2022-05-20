const defaultState = {
  myTests: [

  ],

  isLoading: false,
  error: null
}

export const userTestsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_USER_TESTS_SUCCESS":
      return { ...state, myTests: action.payload }

    case "GET_USER_TESTS_FAILURE":
      return { ...state, error: action.payload }

    case "SET_USER_TESTS_IS_LOADING":
      return { ...state, isLoading: action.payload }

    default:
      return state
  }
}