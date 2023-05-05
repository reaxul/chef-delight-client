import React, { useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../provider/AuthProvider";

function Register() {
    const { createUser } = useContext(AuthContext);
    const handleRegister=event=> {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(userCredential => {
                const createdUser = userCredential.user;
                console.log(createdUser);
            })
            .catch(error => { 
                console.log(error);
            })
    }
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col lg={6}>
          <h2>Registration Page</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group controlId="formPhotoURL">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                required
                placeholder="Enter photo URL"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
