import Accordion from 'react-bootstrap/Accordion';

import {TextInput} from './TextInput'



/**
 * List of program properties
 * @param {*} param0 
 * @returns 
 */
export const GrantingProgramEdit = ({program, actions}) => {
    return (
        <div class="programdescription">
        <div class="basicinfo">
            <TextInput placeholder={"Nazev studijniho programu"} id={program.id} value={program.name}/>
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Typ studijního programu
                        </td>
                        <td>
                            {program.level.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Forma studia
                        </td>
                        <td>
                            {program.form.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Jazyk studia
                        </td>
                        <td>
                            {program.language.name}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
}