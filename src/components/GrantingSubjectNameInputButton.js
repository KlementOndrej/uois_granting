import React, { useState } from 'react';
import { GrantingSubjectNameInput } from './GrantingSubjectNameInput';

/**
 * Button for editing subject name
 * @param {Object} program subject which name is to be edited
 * @param {Object} actions actions from store
 * @returns input button for editing subject name
 */


export const GrantingSubjectNameInputButton = ({ subject, actions }) => {
    const [isEditing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(!isEditing);
    }

    return (
        <div>
            <button onClick={handleEdit}>Edit</button>
            {isEditing && <GrantingSubjectNameInput subject={subject} actions={actions} />}
        </div>
    );
}



