import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from "../reducers/subjectsSlice1"
import subjectsAddFormReducer from "../reducers/subjectsAddFormSlice"

export const store = configureStore({
    reducer: {
        subjects: subjectsReducer,
        subjectsAddForm: subjectsAddFormReducer,
    }
})
