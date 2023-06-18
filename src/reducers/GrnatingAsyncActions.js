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
 * Fetch the program from server checks its type and asks once more for detailed data. Finally puts the result in the store.
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
 * Fetch the program from server checks its type and asks once more for detailed data. Finally puts the result in the store.
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

export const ProgramAsyncUpdate = (program) => (dispatch, getState) => {
    const programMutationJSON = (program) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                programUpdate(program: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  program {
                    id
                    name
                    lastchange
                  }
                }
              }`,
            variables: program
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', 
        redirect: 'follow',
        body: JSON.stringify(programMutationJSON(program))
    }


    return fetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.programUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    const lastchange = json.data.programUpdate.program.lastchange
                    dispatch(ProgramActions.program_update({...program, lastchange: lastchange}))
                }
                return json
            }
        )   
}

export const ProgramTypeAsyncUpdate = (program) => (dispatch, getState) => {
    const programMutationJSON = (program) => {
        return {
            query: `mutation ($id: ID!, $typeId: ID!, $lastchange: DateTime!) {
                programUpdate(program: {id: $id, typeId: $typeId, lastchange: $lastchange}) {
                  id
                  msg
                  program {
                    id
                    type{
                        id
                    }
                    lastchange
                  }
                }
              }`,
            variables: {"id": program.id, "typeId": program.type.id, "lastchange": program.lastchange}
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', 
        redirect: 'follow',
        body: JSON.stringify(programMutationJSON(program))
    }


    return fetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.programUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    const lastchange = json.data.programUpdate.program.lastchange
                    dispatch(ProgramActions.program_update({...program, lastchange: lastchange}))
                }
                return json
            }
        )   
}