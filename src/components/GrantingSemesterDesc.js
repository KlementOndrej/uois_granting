import React from "react"

/**
 * Semestr description
 * @param {Object} semester semester to be displayed
 * @returns table row with semester description
 */
export const GrantingSemesterDesc = (semester) => {
    retrun (
        <tr key={semester.id}>
            <td>{semester.order}</td>
            <td>{semester.credits}</td>
            <td>{semester.classificationType.name}</td>
            <td>
                <ul>
                    {semester.topics && semester.topics.map((topic) => (
                        <li key={topic.id}>{topic.name}</li>
                    ))}
                </ul>
            </td>
        </tr>
    )
}