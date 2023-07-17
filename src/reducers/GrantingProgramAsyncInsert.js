import { GrantingProgramInsert } from "../queries/GrantingProgramInsertMutation";
import { GrantingActions } from "./grantingreducers";

/**
 * Asynchronous action creator that sends a program insert request to a server.
 * 
 * @param {Object} newprogram - program to be added
 * @returns {Function} A promise representing the asynchronous operation.
 */
export const ProgramAsyncInsert = (newprogram) => (dispatch, getState) => {
    GrantingProgramInsert(newprogram.name, newprogram.typeId)
    .then(response => response.json())
    .then(json => {
        const message = json.data?.programInsert.msg
        const program = json.data?.programInsert.program;
        if (message === 'ok') {
            console.log("programInsert", message)
            dispatch(GrantingActions.granting_add(program));
        }
        else {
            console.log("program insert failed")
        }
        return json
        })
    }