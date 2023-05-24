import { ProgramActions } from "./grantingreducers" 

import { authorizedFetch } from "queries/authorizedFetch"
import {GrantingProgramQuery} from 'queries/GrantingProgramQuery'
import {fakeQuery} from 'queries/fakeQuery'
/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const FetchHelper = (id, query, resultselector, dispatch, getState) => {
    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }
    const p = query(id)
        .then(
            response => response.json(),
            error => error
        )
        .then(
            j => log('incomming')(j)
        )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
        )
        .then(
            json => log('dispatching')(dispatch(ProgramActions.program_update(json))),
            error => error
        )

    return p
}

/**
 * Fetch the group from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const ProgramFetch = (id) => (dispatch, getState) => {
    const programSelector = (json) => json.data.programById
    const bodyfunc = async () => {
        let programData = await FetchHelper(id, GrantingProgramQuery, programSelector, dispatch, getState)
        
        return programData
    }
    return bodyfunc()
}

/**
 * Fetch the group from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const ProgramFakeFetch = (id) => (dispatch, getState) => {
    const programSelector = (json) => json.programById
    const bodyfunc = async () => {
        let programData = await FetchHelper(id, fakeQuery, programSelector, dispatch, getState)
        dispatch(ProgramActions.program_select(programData))
        return programData
    }
    return bodyfunc()
}


