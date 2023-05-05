import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <h3>About Us</h3>
            <p>We are a recipe website dedicated to showcasing the cuisine of korea chefs. Our goal is to provide our visitors with a diverse range of recipes and cooking tips from expert chefs.</p>
          </Col>
          <Col md={3}>
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>Email: info@yourwebsite.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main St, Your City, Your State, 12345</li>
            </ul>
          </Col>
          <Col md={3}>
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center bg-secondary text-white p-3">
        <p>&copy; 2023 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
