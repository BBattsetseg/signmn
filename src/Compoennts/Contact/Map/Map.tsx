import { Container, Frame } from './Map.styles';

const Map = () => {
  return (
    <Container>
      <Frame
        title="company location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.3571905142103!2d106.92845058262132!3d47.911600682725464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923765ed2cdf%3A0x2e60294a4a98b410!2sRegency%20Residence!5e0!3m2!1sen!2smn!4v1644312810210!5m2!1sen!2smn"
      />
    </Container>
  );
};

export { Map };
