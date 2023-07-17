import { ProgramAsyncUpdate, ProgramTypeAsyncUpdate} from 'reducers/GrnatingProgramAsyncUpdate'
import { ProgramFakeFetch, ProgramFetch} from 'reducers/GrantingProgramAsyncFetch'
import { ProgramAsyncInsert } from './GrantingProgramAsyncInsert'
import { SemesterAsyncUpdate } from './GrantingSemesterAsyncUpdate'

/**
 * vytvori actions
 * @param {*} dispatch 
 * @returns 
 */
export const bindGrantingActions = (dispatch) => {
    return {
        programFetch: (id) => dispatch(ProgramFetch(id)),
        
        programFakeFetch: (id) => dispatch(ProgramFakeFetch(id)),

        programAsyncUpdate: (program) => dispatch(ProgramAsyncUpdate(program)),

        programTypeAsyncUpdate: (program) => dispatch(ProgramTypeAsyncUpdate(program)),

        programAsyncInsert: (program) => dispatch(ProgramAsyncInsert(program)),

        semesterAsyncUpdate: (semester) => dispatch(SemesterAsyncUpdate(semester))
    }
}