import { GrantingActions } from "./grantingreducers" 

export const SemesterAsyncUpdate = (semester) => (dispatch, getState) => {
    const semesterMutationJSON = (semester) => {
        return {
            query: `mutation  ($id: ID!, $lastchange: DateTime!, $credits: Int!, $classificationtypeId: ID!, $order: Int!){
                semesterUpdate(
                  semester: {id: $id, lastchange: $lastchange, credits: $credits, classificationtypeId: $classificationtypeId, order: $order}
                ) {
                  id
                  msg
                  semester {
                    id
                    order
                    lastchange
                    topics {
                      id
                      name
                      lastchange
                    }
                    credits
                    classificationType {
                      id
                      name
                    }
                }
                }
              }`,
            variables: {id: semester.id, lastchange: semester.lastchange, credits: semester.credits, classificationtypeId: semester.classificationType.id, order: semester.order} 
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', 
        redirect: 'follow',
        body: JSON.stringify(semesterMutationJSON(semester))
    }


    return fetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.semesterUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    const lastchange = json.data.semesterUpdate.semester.lastchange
                    dispatch(GrantingActions.granting_update({...semester, lastchange: lastchange}))
                }
                return json
            }
        )   
}
