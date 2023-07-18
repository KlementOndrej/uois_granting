import React from 'react';
import Table from 'react-bootstrap/Table';
import { GrantingSubjectNameInputButton } from './GrantingSubjectNameInputButton';



  
/**
 * A functional React component that displays a table of subjects.
 *
 * @param {Object[]} props.subjects - An array of subjects to display.
 * @returns {JSX.Element} The rendered component.
 */
export const GrantingSubjectTable = ({ subjects, actions }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Edit</th>
              
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>
                <GrantingSubjectNameInputButton subject={subject} actions={actions} />
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
};
