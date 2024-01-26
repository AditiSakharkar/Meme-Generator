import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
const Memecard = (props) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "12rem", margin: "25px", padding: "10px" }}>
      <Card.Img varient="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button
          onClick={(e) => navigate(`/edit?url=${props.img}`)}
          varient="primary"
        >
          EDIT
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Memecard;
