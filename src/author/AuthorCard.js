import React from "react";
import {Card, Button, Accordion} from "react-bootstrap";

export function AuthorCard(props) {
    return(
        <Accordion defaultActiveKey="0">
            <Card style={{ width: "16em"}}>
                <Card.Img variant="top" src="https://via.placeholder.com/150"/>
                <Card.Title>{props.author.name}</Card.Title>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Click me to learn more!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Text>Author: {props.author.detail}</Card.Text>
                        <Button variant="warning">Books By Author</Button>
                    </Card.Body>
                </Accordion.Collapse> 
            </Card>
        </Accordion>
    );
}