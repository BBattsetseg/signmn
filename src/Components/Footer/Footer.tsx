import { useEffect, useState } from 'react';

import { Link } from '../Link/Link';

import { FooterContainer, Author } from './Footer.styles';

const Footer = () => {
  const [year, setYear] = useState(2021);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <FooterContainer>
      <Author>
        <Link
          href="https://github.com/BBattsetseg/signmn.git"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer"
        >
          &copy; Metaverse Signature LLC
        </Link>
        ,  {year} он
      </Author>
    </FooterContainer>
  );
};

export { Footer };
