import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import profileSlice  from "../slices/profileSlice";
import projectSlice from "../slices/projectSlice";
import marketSlice from "../slices/marketSlice";

export const rootReducers = combineReducers({
    auth: authReducer,
    profile: profileSlice, 
    project: projectSlice, 
    market: marketSlice
})