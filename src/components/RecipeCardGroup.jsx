import React from "react";
import { Card } from "react-bootstrap";
import { FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const RecipeCardGroup = ({ recipes }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {recipes.map((recipe, index) => (
        <Card key={index} className="m-3" style={{ width: "18rem" }}>
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

            <Card.Footer className="d-flex align-items-center text-muted">
              <div className=" flex-grow-1">
                <Rating
                  readonly
                  placeholderRating={recipe.rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                
              </div>

              <FaRegBookmark></FaRegBookmark>
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RecipeCardGroup;
