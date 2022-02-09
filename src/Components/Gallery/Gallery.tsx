import { variants, item } from '../../Assets/animations/gallery';
import { useCursorContext } from '../../Contexts/CursorContext';
import { data } from '../../Data/gallery';
import { ImgFill } from '../ImgFill/ImgFill.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import {Anchor} from '../../Types/types'

import { Container } from './Gallery.styles';

const Gallery = ({ id }: Anchor) => {
  const { setIsActive } = useCursorContext();
  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionTitle labelText="Хэрэглэгчийн хөтөч" />
      {data.map(({ src, id, alt }) => (
        <ImgFill
          variants={item}
          width="300px"
          height="160px"
          src={src}
          key={id}
          alt={alt}
          className={`img--${id}`}
          loading="lazy"
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        />
      ))}
    </Container>
  );
};

export { Gallery };
