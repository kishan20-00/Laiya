import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';

function ViewLost() {
    const [values, setValues] = useState([]);

    const [LostItem, setLostItem] = useState("");
    const [UserName, setUserName] = useState("");
    const [Image, setImage] = useState("");
    const [contactNumber, setContactName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const [lost, setLost] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        function getLost() {
            axios.get("http://localhost:6000/lost/").then((res) => {
                setLost(res.data);
            }).catch((err) => {
                alert(err.message);
            });
        }
        getLost();
    }, []);

    const deleteLost = (id) => {
        axios.delete(`http://localhost:6000/lost/delete/${id}`);
        alert("Lost Details deleted.");
    };

    const updateLostDetails = (val) => {
        setValues(val);
        handleShow();
    };

    function sendData(e) {
        e.preventDefault();

        const updatedValues = {
            id: values._id,
            LostItem: LostItem || values.LostItem,
            UserName: UserName || values.UserName,
            Image: Image || values.Image,
            contactNumber: contactNumber || values.contactNumber,
            description: description || values.description,
            status: status || values.status,
        };

        axios.put(`http://localhost:6000/lost/update/${updatedValues.id}`, updatedValues)
            .then(() => {
                alert("Lost Details Updated");
                handleClose();
            }).catch((err) => {
                console.log(err);
                alert(err);
            });
    }

    return (
        <div>
            <h1>All Lost Item Details</h1>
            {lost.map((val, key) => (
                <div key={key} className="loyals">
                    <ListGroup key={key} horizontal className="my-2">
                        <ListGroup.Item>{val._id}</ListGroup.Item>
                        <ListGroup.Item>{val.LostItem}</ListGroup.Item>
                        <ListGroup.Item>{val.UserName}</ListGroup.Item>
                        <ListGroup.Item>{val.Image}</ListGroup.Item>
                        <ListGroup.Item>{val.contactNumber}</ListGroup.Item>
                        <ListGroup.Item>{val.description}</ListGroup.Item>
                        <ListGroup.Item>{val.status}</ListGroup.Item>
                    </ListGroup>

                    <Button variant="primary" onClick={() => updateLostDetails(val)} className="uppay">Update</Button>
                    <Button className="delpay" onClick={() => deleteLost(val._id)}>Delete</Button>

                    <Modal show={show} onHide={handleClose} className="getfunc">
                        <Modal.Header closeButton>
                            <Modal.Title>Update Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form onSubmit={sendData}>
                                <Form.Group controlId="name">
                                    <Form.Label>Loyalty Offer Name</Form.Label>
                                    <Form.Control type="text" defaultValue={values.name} onChange={(e) => setLostItem(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Loyalty Prices</Form.Label>
                                    <Form.Control type="text" defaultValue={values.email} onChange={(e) => setUserName(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="contactNumber">
                                    <Form.Label>Store Name</Form.Label>
                                    <Form.Control type="text" defaultValue={values.contactNumber} onChange={(e) => setImage(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" defaultValue={values.password} onChange={(e) => setContactName(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" defaultValue={values.password} onChange={(e) => setDescription(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" defaultValue={values.password} onChange={(e) => setStatus(e.target.value)} required />
                                </Form.Group>

                                <Button className="finalpay" type="submit">Edit details</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default ViewLost;
