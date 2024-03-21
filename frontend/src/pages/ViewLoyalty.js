import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';

function ViewLoyalty() {
    const [values, setValues] = useState([]);

    const [LoyaltyOfferName, setLoyaltyOfferName] = useState("");
    const [LoyaltyPrices, setLoyaltyPrices] = useState("");
    const [Store, setStore] = useState("");
    const [description, setDescription] = useState("");

    const [loyal, setLoyal] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        function getLoyal() {
            axios.get("http://localhost:6000/loyal/").then((res) => {
                setLoyal(res.data);
            }).catch((err) => {
                alert(err.message);
            });
        }
        getLoyal();
    }, []);

    const deleteLoyal = (id) => {
        axios.delete(`http://localhost:6000/loyal/delete/${id}`);
        alert("Loyal Details deleted.");
    };

    const updateLoyalDetails = (val) => {
        setValues(val);
        handleShow();
    };

    function sendData(e) {
        e.preventDefault();

        const updatedValues = {
            id: values._id,
            LoyaltyOfferName: LoyaltyOfferName || values.LoyaltyOfferName,
            LoyaltyPrices: LoyaltyPrices || values.LoyaltyPrices,
            Store: Store || values.Store,
            description: description || values.description
        };

        axios.put(`http://localhost:6000/loyal/update/${updatedValues.id}`, updatedValues)
            .then(() => {
                alert("Loyal Details Updated");
                handleClose();
            }).catch((err) => {
                console.log(err);
                alert(err);
            });
    }

    return (
        <div>
            <h1>All Loyalty Offers</h1>
            {loyal.map((val, key) => (
                <div key={key} className="loyals">
                    <ListGroup key={key} horizontal className="my-2">
                        <ListGroup.Item>{val._id}</ListGroup.Item>
                        <ListGroup.Item>{val.LoyaltyOfferName}</ListGroup.Item>
                        <ListGroup.Item>{val.LoyaltyPrices}</ListGroup.Item>
                        <ListGroup.Item>{val.Store}</ListGroup.Item>
                        <ListGroup.Item>{val.description}</ListGroup.Item>
                    </ListGroup>

                    <Button variant="primary" onClick={() => updateLoyalDetails(val)} className="uppay">Update</Button>
                    <Button className="delpay" onClick={() => deleteLoyal(val._id)}>Delete</Button>

                    <Modal show={show} onHide={handleClose} className="getfunc">
                        <Modal.Header closeButton>
                            <Modal.Title>Update Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form onSubmit={sendData}>
                                <Form.Group controlId="name">
                                    <Form.Label>Loyalty Offer Name</Form.Label>
                                    <Form.Control type="text" defaultValue={values.name} onChange={(e) => setLoyaltyOfferName(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Loyalty Prices</Form.Label>
                                    <Form.Control type="text" defaultValue={values.email} onChange={(e) => setLoyaltyPrices(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="contactNumber">
                                    <Form.Label>Store Name</Form.Label>
                                    <Form.Control type="text" defaultValue={values.contactNumber} onChange={(e) => setStore(e.target.value)} required />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" defaultValue={values.password} onChange={(e) => setDescription(e.target.value)} required />
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

export default ViewLoyalty;
