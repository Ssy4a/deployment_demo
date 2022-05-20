const defaultState = {
  userId: "62348785b7a3e33fe3a80ad6",
  name: "",
  description: "",
  testItems: [
    {
      key: 0,
      question: "",
      answers:
        [
          {
            key: 0,
            answer: "",
            isRight: false
          }
        ]
    }
  ]
}



export const testConstructorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_TESTITEM":
      const newTestItem = {
        key: state.testItems.length,
        question: "",
        answers:
          [
            {
              key: 0,
              answer: "",
              isRight: false
            }
          ]
      }
      console.log(state.testItems)
      return {
        ...state, testItems: [...state.testItems, newTestItem]
      }

    case "ADD_NEW_ANSWER":

      const newAnswer = {
        key: state.testItems[action.payload].answers.length,
        answer: "",
        isRight: false
      }

      const newTestItemsWithNewAnswer = () => {
        return state.testItems.map((item, id) => {
          if (id === action.payload) return { ...item, answers: [...item.answers, newAnswer] }
          else return item
        })
      }

      return {
        ...state, testItems: newTestItemsWithNewAnswer()
      }

    case "DELETE_TEST_ITEM":

      const newTestItemsWithDeletedItem = () => {
        return state.testItems.filter((item, id) => {
          if (id !== action.payload) return true
        })
      }

      return {
        ...state, testItems: newTestItemsWithDeletedItem()
      }

    case "DELETE_ANSWER":

      const newTestItemsWithDeletedAnswer = () => {
        return state.testItems.map((item, id) => {
          if (id === action.payload.testItemId)
            return {
              ...item,
              answers: item.answers.filter((item, id) => {
                if (id !== action.payload.answerId) return true
              })
            }
          else return item
        })
      }

      return {
        ...state,
        testItems: newTestItemsWithDeletedAnswer()
      }

    case "ON_QUESTION_CHANGE":
      return {
        ...state,
        testItems: state.testItems.map((item, id) => {
          if (id === action.payload.testItemId) return { ...item, question: action.payload.targetValue }
          else return item
        })
      }

    case "ON_ANSWER_CHANGE":
      return {
        ...state,
        testItems: state.testItems.map((item, id) => {
          if (id === action.payload.testItemId)
            return {
              ...item, answers: item.answers.map((item, id) => {
                if (id === action.payload.answerId) return { ...item, answer: action.payload.answer }
                else return item
              })
            }
          else return item
        })
      }

    case "PASS_EDITING_TEST_DATA":
      return action.payload

    case "ON_CHECKBOX_CHANGE":
      console.log(state.testItems[action.payload.testItemId].answers[action.payload.answerId])
      return {
        ...state,
        testItems: state.testItems.map((item, id) => {
          if (id === action.payload.testItemId)
            return {
              ...item, answers: item.answers.map((item, id) => {
                if (id === action.payload.answerId) return { ...item, isRight: !item.isRight }
                return item
              })
            }
          return item
        })
      }


    case "ON_NAME_CHANGE":
      return { ...state, name: action.payload }

    case "ON_DESCRIPTION_CHANGE":
      return { ...state, description: action.payload }

    case "RESET_TEST":
      return defaultState

    default:
      return state
  }
}