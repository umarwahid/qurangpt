import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Pic1 from "./Quran1.jpg"
import Pic2 from "./Quran2.jpg"
import Pic3 from "./Quran3.jpg"

function Carosel() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <div className='carousel-item-container'>
          <img
              className="carousel-image w-100"
              src={Pic1}
              height={550}
              alt="First slide"
              style={{objectFit: "cover"}}
            />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-item-container'>
          <img
              className="carousel-image w-100"
              src={Pic2}
              height={550}
              alt="Second slide"
              style={{objectFit: "cover"}}
            />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-item-container'>
          <img
              className="carousel-image w-100"
              src={Pic3}
              height={550}
              alt="Third slide"
              style={{objectFit: "cover"}}
            />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;