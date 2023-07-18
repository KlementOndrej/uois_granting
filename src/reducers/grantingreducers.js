import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';
import { UpdateSubject } from './subjectsSlice';
/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const GrantingSlice = createSlice({
    name: 'granting',
    initialState: {},
    reducers: {
        granting_add: CreateItem,
        granting_delete: DeleteItem,
        granting_replace: ReplaceItem,
        granting_update: UpdateItem,
        granting_select: SelectItem,

        subject_update: UpdateSubject,
    }
})

//z rezu odvozene akce
export const GrantingActions = GrantingSlice.actions
//z rezu odvozeny stavovy automat
export const GrantingReducer = GrantingSlice.reducer
