import { GrantingActions } from "./grantingreducers" 
/**
 * 
 * @param {*} id 
 * @returns 
 */
export const SubjectAsyncUpdate = (subject) => (dispatch, getState) => {
    const subjectMutationJSON = (subject) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                subjectUpdate(subject: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  subject {
                    id
                    name
                    nameEn
                    lastchange
                  }
                }
              }`,
              variables: subject
        }
    }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', 
        redirect: 'follow',
        body: JSON.stringify(subjectMutationJSON(subject))
    }

    return fetch('/api/gql', params)
        .then(resp => resp.json())
        .then(json => {
            const msg = json.data.subjectUpdate.msg
            if (msg === "fail") {
                console.log("Update failed")
            } else {
                const lastchange = json.data.subjectUpdate.subject.lastchange
                dispatch(GrantingActions.subject_update({...subject, lastchange: lastchange}))
            }
            return json
        })   
}
