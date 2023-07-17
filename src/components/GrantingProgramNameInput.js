import React from 'react';
import { TextInput } from './TextInput';

/**
 * Input for editing program name
 * @param {Object} program program which name is to be edited
 * @param {Object} actions actions from store
 * @returns input field for editing program name
 */

export const ProgramNameInput = ({program, actions}) => {
    const onchange = (value) => (

        actions.programAsyncUpdate({...program, name: value})
            .then(json=>console.log("ProgramNameInput", json.data.programUpdate.msg))
    )
    
    return (
        <TextInput id={program.id} value={program.name} placeholder={"Název studijního programu"} onChange={onchange}/>
    )
}