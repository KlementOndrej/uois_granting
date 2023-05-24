import Accordion from 'react-bootstrap/Accordion';

import {TextInput} from './TextInput'

export const GrantingProgramEdit = ({program, actions}) => {
    return (
        <div className="programdescription">
        <div className="basicinfo">
            <TextInput placeholder={"Nazev studijniho programu"} id={program.id} value={program.name}/>
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Typ studijního programu
                        </td>
                        <td>
                            {program.type.level.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Forma studia
                        </td>
                        <td>
                            {program.type.form.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Jazyk studia
                        </td>
                        <td>
                            {program.type.language.name}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
}