import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const About = () => (
  <AboutPageStyles>
    <div className="container">
      <div className="top-section">
        <div className="left">
          <p className="about__subheading">
            Hola, soy <span>Enuel Monzón</span>
          </p>
          <h2 className="about__heading">Programador Full Stack</h2>
          <div className="about__info">
            <PText>
              Soy de Los Cardales, Buenos Aires, Argentina. Un lugar de belleza
              y tranquilidad. Desde mi infancia, amo el arte y el diseño como
              dibujante. También participé en algunos proyectos en WordPress en
              el 2015. También me encanta crear cosas que puedan ser útiles para
              los demás.
              <br /> <br />
              Empecé a codificar hace poco más de un año. La codificación
              también es un arte para mí. Me encanta y ahora tengo la
              oportunidad de diseñar junto con la codificación. Me parece muy
              interesante y disfruto mucho el proceso.
              <br />
              <br />
              Mi visión es hacer del mundo un lugar mejor. Ahora casi todo se
              está volviendo mejor que nunca. Es hora de que creemos más cosas
              buenas que ayuden al mundo a convertirse en un lugar mejor.
            </PText>
          </div>
          <Button btnText="Descargar CV" btnLink="#" />
        </div>
        <div className="right">
          <img src={AboutImg} alt="Enuel Monzón img" />
        </div>
      </div>
      <div className="about__info__items">
        <div className="about__info__item">
          <h1 className="about__info__heading">Educación</h1>
          <AboutInfoItem
            title="Bachillerato"
            items={['Gestión y servicios de recursos humanos']}
          />
          <AboutInfoItem
            title="UTN-Buenos Aires"
            items={['Diplomatura Full Stack Developer']}
          />
        </div>
      </div>
      <div className="about__info__items">
        <div className="about__info__item">
          <h1 className="about__info__heading">Tecnologías</h1>
          <AboutInfoItem title="FrontEnd" items={['HTML', 'CSS', 'REACT']} />
          <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
          <AboutInfoItem title="Version Control" items={['GitHub']} />
        </div>
      </div>
      <div className="about__info__items">
        <div className="about__info__item">
          <h1 className="about__info__heading">Extras y certificaciones</h1>
          <AboutInfoItem
            title="UTN-FRBA"
            items={[
              'Desarrollo con Angular',
              'Desarrollo con React',
              'Desarrollo con Node',
            ]}
          />
          <AboutInfoItem
            title="freeCodeCamp"
            items={[
              'Diseño Web Responsivo',
              'Algoritmos de JavaScript y Estructura de Datos',
            ]}
          />
          <AboutInfoItem
            title="Udemy"
            items={['Redux', 'JsonWebTokens', 'React Hooks']}
          />
          <AboutInfoItem title="Platzi" items={['FrontEnd Developer']} />
        </div>
      </div>
    </div>
    <ContactBanner />
  </AboutPageStyles>
);

export default About;
