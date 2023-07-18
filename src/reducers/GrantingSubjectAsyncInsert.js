import { GrantingSubjectInsert } from "../queries/GrantingSubjectInsertMutation";
import { GrantingActions } from "./grantingreducers"  

/**
 * Asynchronous action creator that sends a subject insert request to a server.
 * 
 * @param {Object} newSubject - subject to be added
 * @returns {Function} A promise representing the asynchronous operation.
 */
export const SubjectAsyncInsert = (newSubject) => {
  return async (dispatch, getState) => {
      try {
          const response = await GrantingSubjectInsert(newSubject.name, newSubject.nameEn, newSubject.programId, newSubject.id, newSubject.valid)
          const data = await response.json();
          if (data && data.data && data.data.subjectInsert && data.data.subjectInsert.msg === 'ok') {
              dispatch(GrantingActions.granting_add(data.data.subjectInsert.subject));
              console.log("subjectInsert", data.data.subjectInsert.msg)
          } else {
              throw new Error('Subject insert failed');
          }
      } catch (error) {
          console.error(error);
      }
  }
};