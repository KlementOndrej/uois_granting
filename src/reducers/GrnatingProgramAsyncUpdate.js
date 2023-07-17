import { GrantingActions } from "./grantingreducers" 

import { authorizedFetch } from "queries/authorizedFetch"

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
                    dispatch(GrantingActions.granting_update({...program, lastchange: lastchange}))
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
                        name
                        level {
                            name
                            id
                        }
                        language {
                            id
                            name
                        }
                        form {
                            name
                            id
                        }
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
                    dispatch(GrantingActions.granting_update({...program, lastchange: lastchange}))
                }
                return json
            }
        )   
}