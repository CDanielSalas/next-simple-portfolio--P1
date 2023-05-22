import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bot.jpg " width="200" height="600" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chat BOT</h3>
          <p>Imagenes Asociadas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="logo1.png "width ="200" height="600"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nuestro Logo</h3>
          <p>Imagenes Asociadas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="poke.jpg" width ="200" height="600"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Api pokemon</h3>
          <p>
            imagenes asociadas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;