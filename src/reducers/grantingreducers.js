import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';

/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const ProgramSlice = createSlice({
    name: 'programs',
    initialState: {},
    reducers: {
        program_add: CreateItem,
        program_delete: DeleteItem,
        program_replace: ReplaceItem,
        program_update: UpdateItem,
        program_select: SelectItem,
    }
})

//z rezu odvozene akce
export const ProgramActions = ProgramSlice.actions
//z rezu odvozeny stavovy automat
export const ProgramReducer = ProgramSlice.reducer