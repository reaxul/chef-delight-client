import React, { useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

function Login() {
    const { signIn } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(userCredentials => { 
                const loggedInUser = userCredentials.user;
                console.log(loggedInUser);
            })
            .catch(err => { 
                console.log(err);
            })
    }
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
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
