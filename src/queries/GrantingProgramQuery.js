import { authorizedFetch } from 'queries/authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const GrantingProgramQueryJSON = (id) => ({
    "query":
        `query {
            programPage {
              id
              name
              lastchange
              type {
                id
                name
                level {
                  id
                  name
                }
                form {
                  id
                  name
                }
                language {
                  id
                  name
                }
                title {
                  id
                  name
                }
              }
              subjects {
                id
                name
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
            }
          }`
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