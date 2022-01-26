import React from 'react';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
`;

const ContactSection = () => (
  <ContactSectionStyle>
    <div className="container">
      <SectionTitle heading="Contact" subheading="Get in touch" />
      <div className="contactSection__wrapper">
        <div className="left">
          <ContactInfoItem />
        </div>
        <div className="right">contact form</div>
      </div>
    </div>
  </ContactSectionStyle>
);

export default ContactSection;
