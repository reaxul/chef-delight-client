import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeCardGroup = ({ recipes }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {recipes.map((recipe, index) => (
        <Card key={index} className="m-3" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={recipe.image} />
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            
              <h6>Ingredients:</h6>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h6>Cooking Method:</h6>
              <p>{recipe.method}</p>
              <h6>Rating:</h6>
              <p>{recipe.rating}</p>
            
            <Button variant="primary">Favorite</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RecipeCardGroup;
