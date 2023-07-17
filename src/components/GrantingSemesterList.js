import React from "react"
import { Table } from "react-bootstrap"
import { GrantingSemesterDesc } from "./GrantingSemesterDesc"

/**
 * Semester list
 * @param {Object} subject subject with semesters to be displayed
 * @returns table semesters in subject
 */

export const GrantingSemesterList = ({subject}) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Semester</th>
                    <th>Credits</th>
                    <th>Classification</th>
                    <th>Topics</th>
                </tr>
            </thead>
            <tbody>
                {subject.semesters.map((semester) => (
                    <GrantingSemesterDesc semester={semester}/>
                ))}
            </tbody>
        </Table>
    )
}