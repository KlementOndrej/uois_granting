import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialData from "../data1.json";
import { SubjectsQuery } from '../queries/SubjectsQuery';

// Async Thunk for loading subjects
export const loadSubjects = createAsyncThunk(
    'subjects/load',
    async () => {
        const response = await SubjectsQuery();
        const data = await response.json();
        return data.data.subjectPage;
    }
);

const subjectsSlice = createSlice({
    name: "subjects",
    initialState: initialData.subjects,
    reducers: {
        addSubject: (state, action) => {
            state.push(action.payload);
        },
        updateSubject: (state, action) => {
            const subjectIndex = state.findIndex(subject => subject.id === action.payload.id);
            if (subjectIndex >= 0) {
                state[subjectIndex] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubjects.pending, (state) => {
                // Reset the subjects list if loading new data
                state.length = 0;
            })
            .addCase(loadSubjects.fulfilled, (state, action) => {
                // Add the loaded subjects to the state array
                state.push(...action.payload);
            })
            .addCase(loadSubjects.rejected, (state, action) => {
                console.error('Failed to load subjects: ', action.error.message);
            });
    },
});

export const { addSubject, updateSubject } = subjectsSlice.actions;

export default subjectsSlice.reducer;