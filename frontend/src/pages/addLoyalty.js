import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function AddLoyalty(){
    const [LoyaltyID, setLoyaltyID] = useState("");
    const [LoyaltyOfferName, setLoyaltyOfferName] = useState("");
    const [LoyaltyPrices, setLoyaltyPrices] = useState("");
    const [Store, setStore] = useState("");
    const [description, setDescription] = useState("");

    function sendData(e) {
        e.preventDefault();
        
        const newLoyalty = {
            LoyaltyID,
        LoyaltyOfferName,
        LoyaltyPrices,
        Store,
        description,
        }
  
        
        axios.post("http://localhost:5300/loyal/add", newLoyalty).then(()=>{
          alert("Loyalty Details were recorded.");
        }).catch((err)=>{
            alert(err)
        })
  
      }


  return (
    <Form onSubmit={sendData}>
      <Form.Group controlId="userID">
        <Form.Label>Loyalty ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter User ID"
          name="userID"
          onChange={(e)=>{
            setLoyaltyID(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>Loyalty Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={(e)=>{
            setLoyaltyOfferName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="price"
          placeholder="Enter Price"
          name="price"
          onChange={(e)=>{
            setLoyaltyPrices(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="contactNumber">
        <Form.Label>Store Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Contact Number"
          name="contactNumber"
          onChange={(e)=>{
            setStore(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Decription</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          name="description"
          onChange={(e)=>{
            setDescription(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

