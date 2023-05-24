import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { addSubject } from '../features/subjectsSlice1';



const ShowAddSubjectFormButton = () => {
    // State variables for controlling the modal and form inputs
    const [show, setShow] = useState(false);
    const [name, setName] = useState('Unknown');
    const [credits, setCredits] = useState(0);
    const [teacher, setTeacher] = useState('Unknown');
    const [semester, setSemester] = useState(1);
    const dispatch = useDispatch();

    // Function to close the modal
    const handleClose = () => setShow(false);

    // Function to open the modal
    const handleShow = () => setShow(true);
    
    // Function to handle saving the form data and dispatching the addSubject action
    const handleSave = () => {
        const newSubject = { id: "", name, credits, teacher, recommendedSemester: semester };
        dispatch(addSubject(newSubject));
        handleClose();
    };

    return (
        <>
            {/* Button to trigger the modal */}
            <Button variant="primary" onClick={handleShow}>
                Add Subject
            </Button>

            {/* Modal for adding a new subject */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Subject</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Form for entering subject details */}
                    <Form>
                        <Form.Group>
                            <Form.Label>Subject Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter subject name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Credits</Form.Label>
                            <Form.Control type="number" placeholder="Enter credits" onChange={(e) => setCredits(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teacher</Form.Label>
                            <Form.Control type="text" placeholder="Enter teacher" onChange={(e) => setTeacher(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Recommended Semester</Form.Label>
                            <Form.Control type="number" placeholder="Enter recommended semester" onChange={(e) => setSemester(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* Button to close the modal */}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* Button to save the form data */}
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ShowAddSubjectFormButton;