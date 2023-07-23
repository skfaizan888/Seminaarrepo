import Carousel from 'react-bootstrap/Carousel';

export const Home=()=> {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="Images/cara-01.PNG"
          alt="First slide"
        
        // /   style={{height:"500px"}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/cara-02.PNG"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/cara-03.PNG"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}
