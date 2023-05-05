import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';
import RecipeCardGroup from "../components/RecipeCardGroup";

const ChefRecipe = () => {
  const { id } = useParams();
    const chef = useLoaderData();
  return (
    <div>
      <Container fluid className="bg-dark text-white py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={4} className="text-center">
          <Image src={chef.image} roundedCircle fluid />
          <h1 className="my-3">{chef.name}</h1>
          <p>{chef.bio}</p>
          <p>{chef.likes} Likes</p>
          <p>{chef.recipes.length} Recipes</p>
          <p>{chef.experience} Years of Experience</p>
        </Col>
      </Row>
          </Container>
          <RecipeCardGroup recipes={chef}></RecipeCardGroup>
    </div>
  );
};

export default ChefRecipe;
