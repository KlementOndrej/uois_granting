import React from 'react';
import Table from 'react-bootstrap/Table';

export const SubjectsTable = ({subjects}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Credits</th>
                    <th>Teacher</th>
                    <th>Recommended Semester</th>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject, index) => (
                    <tr key={subject.id}>
                        <td>{index + 1}</td>
                        <td>{subject.name}</td>
                        <td>{subject.credits}</td>
                        <td>{subject.teacher}</td>
                        <td>{subject.recommendedSemester}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}