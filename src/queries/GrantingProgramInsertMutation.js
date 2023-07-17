import { authorizedFetch } from './authorizedFetch'

const GrantingProgramInsertJSON = (name, typeId) => ({
    "query":
        `mutation ($typeId: ID!, $name: String!) {
            programInsert(program: {name: $name, typeId: $typeId}) {
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
                    lastchange
                }
              }
            }
          }`,
          "variables": {"typeId": typeId, "name": name}
})

/**
 * Performs a program insert request to the server using authorizedFetch.
 *
 * @param {string} typeId - The ID of the program type.
 * @param {string} name - The name of the program.
 */
export const GrantingProgramInsert = (name, typeId) =>
  console.log(name, typeId)
  authorizedFetch('/gql', {
    body: JSON.stringify(GrantingProgramInsertJSON(name, typeId)),
  });