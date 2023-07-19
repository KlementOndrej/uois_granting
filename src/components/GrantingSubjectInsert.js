import { TextInput } from './TextInput';
import { useState } from 'react'
import { Button } from 'react-bootstrap';


/**
 * Subject insert
 * @param {ID} programId id of program
 * @param {Object} actions actions from store
 * @returns component that can insert a new subject
 */

export const GrantingSubjectInsert = ({programId,actions}) => {
    const [subjectName, setSubjectName] = useState("");
    const [subjectNameEn, setSubjectNameEn] = useState("");  // English subject name
    

    const onClick = () => {
        const newSubject = {
            name: subjectName,
            nameEn: subjectNameEn,
            programId: programId,
        }
        actions.subjectAsyncInsert(newSubject);
    }

    return (
        <div className="subjectdescription">
        <div className="basicinfo">
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Název předmětu
                        </td>
                        <td>
                            <TextInput value={""} placeholder={"Název předmětu"} onChange={(value) => {setSubjectName(value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            English subject name
                        </td>
                        <td>
                            <TextInput value={""} placeholder={"English subject name"} onChange={(value) => {setSubjectNameEn(value)}}/>
                        </td>
                    </tr>
                
                    <tr>
                        <td colSpan="2">
                            <Button variant="secondary" onClick={onClick}>Add</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
};