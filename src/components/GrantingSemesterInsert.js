import React, { useState } from 'react';
import { TextInput } from './TextInput';
import { Button } from 'react-bootstrap';


/**
 * Semester insert
 * @param {ID} subjectId id of subject
 * @param {Object} actions actions from store
 * @returns component that can insert a new semester
 */

export const GrantingSemesterInsert = ({subjectId, actions}) => {
    
    const [classificationtypeId, setClassificationTypeId] = useState('');
    const [order, setOrder] = useState(0);
    const [credits, setCredits] = useState(0);

    const types = [
        {value: "a00a0322-b095-11ed-9bd8-0242ac110002" , name: "Z"},
        {value: "a00a0642-b095-11ed-9bd8-0242ac110002" , name: "Z+Zk"},
        {value: "a00a06f6-b095-11ed-9bd8-0242ac110002" , name: "Zk"},
        {value: "a00a076e-b095-11ed-9bd8-0242ac110002" , name: "KZ"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSemester = { subjectId, classificationtypeId, order, credits };
        actions.semesterAsyncInsert(newSemester);
        setClassificationTypeId('');
        setOrder(0);
        setCredits(0);
    };

    return (
        <div className="semesterdescription">
            <div className="basicinfo">
                <table className="table table-hover table-bordered">
                    <tbody>
                        <tr>
                            <td>
                                Subject ID
                            </td>
                            <td>
                                {subjectId}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Classification Type
                            </td>
                            <td>
                                <select 
                                    value={classificationtypeId} 
                                    onChange={(e) => setClassificationTypeId(e.target.value)}
                                    required
                                >
                                    <option value="">Select type</option>
                                    {types.map((type, index) => (
                                        <option key={index} value={type.value}>{type.name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Order
                            </td>
                            <td>
                                <TextInput 
                                    value={order.toString()} 
                                    placeholder="Order" 
                                    onChange={(value) => setOrder(Number(value))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Credits
                            </td>
                            <td>
                                <TextInput 
                                    value={credits.toString()} 
                                    placeholder="Credits" 
                                    onChange={(value) => setCredits(Number(value))}
                                />
                            </td>
                        </tr>
                    
                        <tr>
                            <td colSpan="2">
                                <Button variant="secondary" onClick={handleSubmit}>Add Semester</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

