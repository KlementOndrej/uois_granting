import { ProgramFakeFetch, ProgramFetch, ProgramAsyncUpdate, ProgramTypeAsyncUpdate} from 'reducers/GrnatingAsyncActions'

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

        programTypeAsyncUpdate: (program) => dispatch(ProgramTypeAsyncUpdate(program))
    }
}