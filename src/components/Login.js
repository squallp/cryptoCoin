import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {logged} from '../redux/reducers/loggedIn';

function Login() {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const dispatch = useDispatch();

    function logIn () {
        if (userName === 'Admin' && userName === 'Admin') {
            dispatch(logged(1));
        } else {
            alert("Username or Password is invalid");
        }
    }

    return (
        <>
        <Container fluid className="around endViewLogin">
        <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={6}>
        <h1 className="heading">Login</h1>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Username(Admin):</InputGroup.Text>
            <FormControl onChange={(e) => setUserName(e.target.value)} aria-label="Filter" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Password(Admin):</InputGroup.Text>
            <FormControl  onChange={(e) => setUserPass(e.target.value)} type="password" aria-label="Filter" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Button onClick={logIn} variant="primary">Log in</Button>
        </Col>
        <Col xs={12} md={3}></Col>
        </Row>
        </Container>
        </>
        );
}

export default Login;
