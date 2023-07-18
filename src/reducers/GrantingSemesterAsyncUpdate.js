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
                    const newSemester = json.data.semesterUpdate.semester
                    const program = {id: "2766fc9a-b095-11ed-9bd8-0242ac110002", subjects: [{semesters: [newSemester]}]}
                    dispatch(GrantingActions.granting_update(program))
                }
                return json
            }
        )   
}
