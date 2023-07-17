import React from 'react';
import { TextInput } from './TextInput';

/**
 * Input for editing semester credit
 * @param {Object} semester semester which credits are to be edited
 * @param {Object} actions actions from store
 * @returns input field for editing semester credits
 */

export const SemesterCreditInput = ({semester, actions}) => {
    const onchange = (value) => (
        actions.semesterAsyncUpdate({...semester, credits: parseInt(value)})
            .then(json=>console.log("SemesterCreditInput", json.data.semesterUpdate.msg))
    )
    
    return (
        <TextInput id={semester.id} value={semester.credits} placeholder={"Pocet kreditu semestru"} onChange={onchange}/>
    )
}