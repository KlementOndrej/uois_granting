import { authorizedFetch } from './authorizedFetch'
const GrantingSemesterInsertJSON = (subjectId, classificationtypeId, order = 0, credits = 0) => ({
  "query":
      `mutation ($subjectId: ID!, $classificationtypeId: ID!, $order: Int, $credits: Int) {
          semesterInsert(semester: {subjectId: $subjectId, classificationtypeId: $classificationtypeId, order: $order, credits: $credits}) {
            id
            msg
            semester {
              id
              order
              credits
              subject {
                  id
              }
              classificationType {
                  id
              }
            }
          }
        }`,
        "variables": {"subjectId": subjectId, "classificationtypeId": classificationtypeId, "order": order, "credits": credits}
});


/**
 * Performs a semester insert request to the server using authorizedFetch.
 *
 * @param {string} subject - The subjectId of the semester.
 */
export const SemesterInsert = (subjectId, classificationtypeId, order = 0, credits = 0) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GrantingSemesterInsertJSON(subjectId, classificationtypeId, order, credits)),
  });
