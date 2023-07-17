import React from 'react';
import { SemesterCreditInput } from './GrantingSemesterCreditInput';

/**
 * Semester editation
 * @param {Object} semester semester to be edited
 * @param {Object} actions actions from store
 * @returns component that can edit semester properties
 */

export const GrantingSemesterEdit = ({semester, actions}) => {
    return (
        <div className="programdescription">
        <div className="basicinfo">
            
            <table className="table table-hover table-bordered">
                <tbody>
                    <tr>
                        <td>
                            Poradi
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Typ klasifikace
                        </td>
                        <td>
                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Kredity
                        </td>
                        <td>
                           <SemesterCreditInput semester={semester} actions={actions}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
}