import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

const ServiceSection = () => (
  <ServicesItemStyles>
    <div className="container">
      <SectionTitle heading="Habilidades" subheading="¿Por qué contratarme?" />

      <div className="services__allItems">
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="Diseño de páginas web"
          desc="Mi fuerte es la empatia hacia el usuario, logrando así una excelente experiencia para el mismo."
        />
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="Desarrollo web"
          desc="Gracias a mi pensamiento flexible tengo facilidad para generar ideas creativas para resolver problemáticas."
        />
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="Tecnologías"
          desc="Cuento con un gran stack de tecnologías como frameworks y librerías que facilitan la programación"
        />
      </div>
    </div>
  </ServicesItemStyles>
);

export default ServiceSection;
