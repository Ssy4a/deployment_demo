import { applyMiddleware, combineReducers, createStore } from "redux";
import { testConstructorReducer } from "./testConstructorReducer";
import { userTestsReducer } from "./userTestsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from './userReducer';
import { ActiveTestsReducer } from './activeTestsReducer';


const rootReducer = combineReducers({
    testConstructor: testConstructorReducer,
    userTests: userTestsReducer,
    user: userReducer,
    activeTests: ActiveTestsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
