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
      <SectionTitle heading="Services" subheading="what I will do for you" />

      <div className="services__allItems">
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="Website Design"
          desc="I do ui/ux design for the website that helps website to get a unique look."
        />
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="Web Development"
          desc="I also develop the websites. I create high performance website with blazing fast speed."
        />
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="App Dev"
          desc="I develop mobile application. I create mobile app with eye catching ui."
        />
      </div>
    </div>
  </ServicesItemStyles>
);

export default ServiceSection;