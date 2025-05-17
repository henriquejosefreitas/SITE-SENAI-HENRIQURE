
import { Carousel } from 'react-bootstrap';


const BannerCarousel = () => {
  return (
    <Carousel interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sc.senai.br/sites/default/files/inline-images/Banners-rotativos-CT-1366x382.jpg"/>
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src="https://sc.senai.br/sites/default/files/inline-images/Banners-Escola-M%C3%B3vel-cabe%C3%A7alho-desktop.jpg" 
          alt="Outro Banner"/>
          
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src="https://sc.senai.br/sites/default/files/inline-images/Banners-rotativos-CP-EAD-1366x382.jpg" 
          alt="Outro Banner"/>
          
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerCarousel;
