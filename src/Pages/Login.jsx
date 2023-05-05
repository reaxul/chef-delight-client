import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-3">
              Login
            </Button>
          </Form>

          <hr />

          <Button variant="danger" className="my-3 w-100">
            Sign in with Google
          </Button>

          <Button variant="dark" className="my-3 w-100">
            Sign in with GitHub
          </Button>

          <div className="text-center">
            Don't have an account? <Link to={'/register'}>Register here</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
