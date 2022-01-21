
import { combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";

const rootReducer = combineReducers({
     values:categoryReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>