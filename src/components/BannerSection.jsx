import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerSection = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
              <img
                  style={{ height: "600px", objectFit: "cover" }}
          className="d-block w-100"
          src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Discover a World of Flavorful Delicacies</h3>
          <p>"Indulge in the savory goodness of our freshly made pasta dishes."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
              <img
                  style={{ height: "600px", objectFit: "cover" }}
          className="d-block w-100"
          src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='text-dark'>
          <h3 >Indulge in natural freshness with our soap</h3>
          <p>Indulge in Luxurious Bathing Experience with Our Handmade Soaps</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
              <img
                  style={{ height: "600px", objectFit: "cover" }}
          className="d-block w-100"
          src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Savor the juiciest burger in town!</h3>
          <p>Savor the Juicy and Delicious Burgers at Our Handmade Burger</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerSection;
