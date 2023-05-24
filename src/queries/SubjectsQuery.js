import { authorizedFetch } from './authorizedFetch'

/**
 * Function that maps id to a JSON representing a "large" (detailed) query to the server
 * @returns 
 */
export const SubjectsQueryJSON = () => ({
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
  }`,
})

/**
* Execution of query to the server. Utilizes authorizedFetch (encapsulation)
* @returns 
*/
export const SubjectsQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(SubjectsQueryJSON()),
    })