import { authorizedFetch } from './authorizedFetch'

const GrantingSubjectInsertJSON = (name, nameEn, programId) => ({
    "query":
        `mutation ($name: String!, $nameEn: String!, $programId: ID!) {
            subjectInsert(subject: {name: $name, nameEn: $nameEn, programId: $programId}) {
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
          "variables": {"name": name, "nameEn": nameEn, "programId": programId}
})

/**
 * Performs a subject insert request to the server using authorizedFetch.
 *
 * @param {string} name - The name of the subject.
 */
export const GrantingSubjectInsert = (name, nameEn, programId) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GrantingSubjectInsertJSON(name, nameEn, programId)),
  });