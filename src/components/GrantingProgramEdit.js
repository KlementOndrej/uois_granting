import React from 'react';
import { GrantingProgramTypeSelect } from './GrantingProgramTypeSelect';
import { ProgramNameInput } from './GrantingProgramNameInput';

/**
 * Program editation
 * @param {Object} semester semester to be displayed
 * @param {Object} actions actions from store
 * @returns component that can edit program properties
 */

export const GrantingProgramEdit = ({program, actions}) => {
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
                            <ProgramNameInput program={program} actions={actions}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Typ studijního programu
                        </td>
                        <td>
                            <GrantingProgramTypeSelect program={program} actions={actions}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
}