import { TextInput } from './TextInput';


/**
* Input for editing subject name
* @param {Object} subject subject which name is to be edited
* @param {Object} actions actions from store
* @returns input field for editing subject name
*/

export const GrantingSubjectNameInput = ({subject, actions}) => {
    const onchange = (value) => (
        
        actions.subjectAsyncUpdate({...subject, name: value})
            .then(json=>console.log("SubjectNameInput", json.data.subjectUpdate.msg))
    )
    
    return (
        <TextInput id={subject.id} value={subject.name} placeholder={"Název předmětu"} onChange={onchange}/>
    )
}
