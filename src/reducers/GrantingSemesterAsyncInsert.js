import { SemesterInsert } from "../queries/GrantingSemesterInsertMutation";
import { GrantingActions } from "./grantingreducers"

/**
 * Asynchronous action creator that sends a semester insert request to a server.
 * 
 * @param {Object} newSemester - semester to be added
 * @returns {Function} A promise representing the asynchronous operation.
 */
export const SemesterAsyncInsert = (newSemester) => {
    return async (dispatch, getState) => {
        try {
            const response = await SemesterInsert(newSemester.subjectId, newSemester.classificationtypeId, newSemester.order, newSemester.credits);
            if (!response.ok) {
                console.log('Response status:', response.status);
                console.log('Response status text:', response.statusText);
            }
            const data = await response.json();
            console.log('Response data:', data);
            if (data && data.data && data.data.semesterInsert && data.data.semesterInsert.msg === 'ok') {
               
                const insertedSemester = {
                    id: data.data.semesterInsert.semester.id,
                    subjectId: data.data.semesterInsert.semester.subject.id,
                    classificationtypeId: data.data.semesterInsert.semester.classificationType.id,
                    order: data.data.semesterInsert.semester.order,
                    credits: data.data.semesterInsert.semester.credits,
                    valid: data.data.semesterInsert.semester.id
                };
                dispatch(GrantingActions.granting_add(insertedSemester));
                console.log("semesterInsert", data.data.semesterInsert.msg)
            } else {
                throw new Error('Semester insert failed');
            }
        } catch (error) {
            console.error(error);
        }
    }
};

