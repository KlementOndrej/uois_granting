  export const UpdateSubject = (state, action) => {
    const updatedSubject = action.payload;
    
    // Iterate over all programs in the state
    for (let program of Object.values(state)) {
        if (program.subjects) {
            // Find the subject to be updated in the current program
            const subjectIndex = program.subjects.findIndex(subject => subject.id === updatedSubject.id);
            
            // If the subject was found, update it
            if (subjectIndex !== -1) {
                program.subjects[subjectIndex] = { ...program.subjects[subjectIndex], ...updatedSubject };
            }
        }
    }
  }

export const { updateSubject } = subjectsSlice.actions;

export default subjectsSlice.reducer;
