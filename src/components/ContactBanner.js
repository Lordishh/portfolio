import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

const ContactBanner = () => (
  <ContactBannerStyles>
    <div className="container">
      <div className="contactBanner__wrapper">
        <PText>¿Tiene una propuesta que se ajusta a mi stack?</PText>
        <h3 className="contactBanner__heading">Deja que te ayude</h3>
        <Button btnLink="/contact" btnText="Contáctese ahora" />
      </div>
    </div>
  </ContactBannerStyles>
);

export default ContactBanner;
