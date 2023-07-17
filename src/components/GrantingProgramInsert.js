import { GrantingDropdown } from './GrantingDropdown';
import { TextInput } from './TextInput';
import { useState, useCallback } from 'react'
import { Button } from 'react-bootstrap';


export const GrantingProgramInsert = ({actions}) => {
    const [programName, setProgramName] = useState("")
    const [programTypeId, setProgramTypeId] = useState("")

    const types = [
        {value: "fd4f0980-9315-11ed-9b95-0242ac110002", name: "bakalářský prezenční 3 roky čeština"},
        {value: "fd4f1d4e-9315-11ed-9b95-0242ac110002", name: "bakalářský kombinovaný 3 roky čeština"},
        {value: "fd4f1eb6-9315-11ed-9b95-0242ac110002", name: "magisterský navazující na bakalářský prezenční 2 roky čeština"},
        {value: "fd4f1f4c-9315-11ed-9b95-0242ac110002", name: "magisterský navazující na bakalářský kombinovaný 2 roky čeština"},
        {value: "fd4f1fba-9315-11ed-9b95-0242ac110002", name: "doktorský prezenční 4 roky čeština"},
        {value: "fd4f2028-9315-11ed-9b95-0242ac110002", name: "doktorský kombinovaný 4 roky čeština"},
        {value: "fd4f2082-9315-11ed-9b95-0242ac110002", name: "magisterský prezenční 5 let čeština"},
        {value: "fd4f20dc-9315-11ed-9b95-0242ac110002", name: "magisterský prezenční 6 let čeština"},
    ];

    const onClick = () => {
            const newProgram = {
                name: programName,
                typeId: programTypeId            
            }
            actions.programAsyncInsert(newProgram)
        }

    return (
        <div className="programdescription">
        <div className="basicinfo">
            
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Název studijního programu
                        </td>
                        <td>
                            <TextInput value={""} placeholder={"Název studijního programu"} onChange={(value) => {setProgramName(value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Typ studijního programu
                        </td>
                        <td>
                            <GrantingDropdown value={""} onChange={(value) => {setProgramTypeId(value)}} items={types}/>
                        </td>
                    </tr>
                    <tr>
                        <Button variant="secondary" onClick={onClick}>Add</Button>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
}