import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const HomeCarousel = () => {
  return (
      <Carousel>
        <Carousel.Item>
          <img
            width={900} height={500} 
            className="d-block w-100"
            src="crsl1.jpg"
            //src="a1.png/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>WELCOME TO MEDPLUS</h1>
            <h2>Your Friendly Neighbourhood Pharmacy.</h2>
            <p></p>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          width={900} height={500} 
            className="d-block w-100"
            //src="holder.js/800x400?text=Second slide&bg=282c34"
            src="DrugsBG.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h1> ABOUT US </h1>
            <h3>Get easy access to drugs </h3>
            <h4>This is a system that stores data and enables functionality that organizes and maintains the medication use process within pharmacies.</h4>
            <p></p>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900} height={500} 
            className="d-block w-100"
            //src="holder.js/800x400?text=Third slide&bg=20232a"
            src="backgroundimg.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>Get Medicines at the Right Price</h2>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default HomeCarousel;