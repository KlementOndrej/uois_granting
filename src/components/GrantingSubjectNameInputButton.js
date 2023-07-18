import React, { useState } from 'react';
import { GrantingSubjectNameInput } from './GrantingSubjectNameInput';

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
}

export default ShowAddSubjectFormButton;
