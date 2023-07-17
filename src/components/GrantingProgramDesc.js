import Accordion from 'react-bootstrap/Accordion';

export const GrantingProgramDesc = ({program, actions}) => {
    return (
        <div className="programdescription">
        <div className="basicinfo">
            <h1>{program.name}</h1>
            <h3>{program.type.name}</h3>
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