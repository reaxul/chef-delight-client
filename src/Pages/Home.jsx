import React from "react";
import BannerSection from "../components/BannerSection";
import { useLoaderData } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <div>
      <BannerSection></BannerSection>
      <Row className="justify-content-center container mx-auto">
        {chefs.map((chef, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img  style={{ height: "200px", objectFit: "cover" }} variant="top" src={chef.image} />
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>
                  {chef.experience} years of experience <br />
                  {chef.recipes} recipes <br />
                  {chef.likes} likes
                </Card.Text>
                <Button variant="primary">View Recipes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
