import { ProgramAsyncUpdate, ProgramTypeAsyncUpdate} from 'reducers/GranatingProgramAsyncUpdate'
import { ProgramFakeFetch, ProgramFetch} from 'reducers/GrantingProgramAsyncFetch'
import { ProgramAsyncInsert } from './GrantingProgramAsyncInsert'
import { SemesterAsyncUpdate } from './GrantingSemesterAsyncUpdate'
import { SemesterAsyncInsert } from './GrantingSemesterAsyncInsert'
import { SubjectAsyncUpdate } from './GrantingSubjectAsyncUpdate'
import { SubjectAsyncInsert} from './GrantingSubjectAsyncInsert'


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

        semesterAsyncUpdate: (semester) => dispatch(SemesterAsyncUpdate(semester)),
        
        semesterAsyncInsert: (semester) => dispatch(SemesterAsyncInsert(semester)),

        subjectAsyncUpdate: (subject) => dispatch(SubjectAsyncUpdate(subject)),
        
        subjectAsyncInsert: (subject) => dispatch(SubjectAsyncInsert(subject)),
    }
}
