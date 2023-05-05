import React from "react";
import BannerSection from "../components/BannerSection";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <div>
      <BannerSection></BannerSection>
          <Row className="justify-content-center container mx-auto">
              <div className="text-center my-5">
              <h3>Meet Our Culinary Team</h3>
              <p>Meet our talented chefs and discover their delicious creations</p>
              </div>
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
                <Link to={`/chef-recipe/${chef.id}`}><Button variant="warning">View Recipes</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
