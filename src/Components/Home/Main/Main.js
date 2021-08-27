import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Main.css';



const Main = (props) => {

    const [age, setAge] = useState(false);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Contact Name</Card.Title>
                    <Card.Text>
                        <p>Name: {props.name} </p>
                        <p>Email: {props.email} </p>
                        <p>Nationality: {props.nationality} </p>
                        {age && <p> Age: {props.age} </p>}
                    </Card.Text>
                    <Button variant="success" onClick={() => setAge(!age)}>Show Age</Button>
                </Card.Body>
            </Card>
        </>
    );
};


export default Main;