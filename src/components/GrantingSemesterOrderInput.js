import React from 'react';
import { TextInput } from './TextInput';

/**
 * Input for editing semester order
 * @param {Object} semester semester which order is to be edited
 * @param {Object} actions actions from store
 * @returns input field for editing semester order
 */

export const SemesterOrderInput = ({semester, actions}) => {
    const onchange = (value) => (
        actions.semesterAsyncUpdate({...semester, order: parseInt(value)})
            .then(json=>console.log("SemesterOrderInput", json.data.semesterUpdate.msg))
    )
    
    return (
        <TextInput id={semester.id} value={semester.order} placeholder={"Poradi semestru"} onChange={onchange}/>
    )
}