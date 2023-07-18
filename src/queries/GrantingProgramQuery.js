import { authorizedFetch } from 'queries/authorizedFetch'

export const GrantingProgramQueryJSON = (id) => ({
    "query":
        `query ($id: ID!) {
          programById(id: $id) {
            id
            lastchange
            name
            nameEn
            subjects {
              id
              name
              nameEn
              lastchange
              semesters {
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
            type {
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
          }
        }`,
        "variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const GrantingProgramQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GrantingProgramQueryJSON(id)),
    })
