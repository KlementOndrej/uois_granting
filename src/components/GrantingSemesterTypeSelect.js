import React from "react";
import { GrantingDropdown } from "./GrantingDropdown"

/**
 * Dropdown for selecting semester type
 * @param {Object} semester semester to be edited
 * @param {Object} actions actions from store
 * @returns Dropdown for selecting semester type to be edited
 */

export const SemesterTypeSelect = ({semester, actions}) => {
    const types = [
        {value: "a00a0322-b095-11ed-9bd8-0242ac110002" , name: "Z"},
        {value: "a00a0642-b095-11ed-9bd8-0242ac110002" , name: "Z+Zk"},
        {value: "a00a06f6-b095-11ed-9bd8-0242ac110002" , name: "Zk"},
        {value: "a00a076e-b095-11ed-9bd8-0242ac110002" , name: "KZ"}
    ];

    const onChange = (value) => (
        actions.semesterAsyncUpdate({...semester, classificationType: {...semester.classificationType, id: value}})
            .then(json=>console.log("ProgramTypeChange", json.data.semesterUpdate.msg))
    )

    return(
        <GrantingDropdown id={semester.id} value={semester.classificationType.id} onChange={onChange} items={types}/>
    )
}