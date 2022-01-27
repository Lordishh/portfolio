import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-dark);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="container">
      <div className="footer__col1">
        <h1 className="footer__col1__title">Enuel Monzón</h1>
        <PText>
          Diseñador y desarrollador web de Buenos Aires, Argentina. Hago sitios
          web que tienen diseños únicos y también un buen rendimiento.
        </PText>
      </div>
      <div className="footer__col2">
        <FooterCol
          heading="Links importantes"
          links={[
            {
              title: 'Inicio',
              path: '/',
              type: 'Link',
            },
            {
              title: 'Sobre mi',
              path: '/about',
              type: 'Link',
            },
            {
              title: 'Proyectos',
              path: '/projects',
              type: 'Link',
            },
            {
              title: 'Contacto',
              path: '/contact',
              type: 'Link',
            },
          ]}
        />
      </div>
      <div className="footer__col3">
        <FooterCol
          heading="Información de contacto"
          links={[
            {
              title: '+54 11 2747-9201',
              path: 'tel:+54 11 2747-9201',
            },
            {
              title: 'enuel.monzon@gmail.com',
              path: 'mailto:enuel.monzon@gmail.com',
            },
            {
              title: 'Campana, Buenos Aires, Argentina',
              path: 'http://google.com/maps',
            },
          ]}
        />
      </div>
      <div className="footer__col4">
        <FooterCol
          heading="Links a redes sociales"
          links={[
            {
              title: 'Facebook',
              path: 'https://www.facebook.com/enuelmonzon',
            },
            {
              title: 'Instagram',
              path: 'https://www.instagram.com/enuel_developer/',
            },
            {
              title: 'GitHub',
              path: 'https://github.com/Lordishh',
            },
            {
              title: 'LinkedIn',
              path: 'https://www.linkedin.com/in/enuel-monzon/',
            },
          ]}
        />
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <PText>© 2022 - Portfolio | Designed By Enuel Monzón</PText>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
