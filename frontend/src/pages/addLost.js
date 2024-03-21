import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function AddLost(){
    const [LostID, setLostID] = useState("");
    const [LostItem, setLostItem] = useState("");
    const [UserName, setUserName] = useState("");
    const [Image, setImage] = useState("");
    const [contactNumber, setContactName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    function sendData(e) {
        e.preventDefault();
        
        const newLost = {
            LostID,
        LostItem,
        UserName,
        Image,
        contactNumber,
        description,
        status
        }
  
        
        axios.post("http://localhost:5300/lost/add", newLost).then(()=>{
          alert("Lost Details were recorded.");
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
            setLostID(e.target.value);
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
            setLostItem(e.target.value);
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
            setUserName(e.target.value);
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
            setImage(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Decription</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e)=>{
            setContactName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Decription</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e)=>{
            setDescription(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Decription</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e)=>{
            setStatus(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

