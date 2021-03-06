import React from 'react';
import styled from 'styled-components';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
/* import ContactForm from './ContactForm'; */

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
  }
  /* .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }*/
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

const ContactSection = () => (
  <ContactSectionStyle>
    <div className="container">
      <SectionTitle
        heading="Contacto"
        subheading="Ponerse en contacto
"
      />
      <div className="contactSection__wrapper">
        <div className="left">
          <ContactInfoItem icon={<MdLocalPhone />} text="+54 11 2747-9201" />
          <ContactInfoItem
            icon={<FaGithub />}
            text="https://github.com/Lordishh"
          />
          <ContactInfoItem
            icon={<FaLinkedin />}
            text="https://www.linkedin.com/in/enuel-monzon-dev/"
          />
          <ContactInfoItem icon={<MdEmail />} text="enuel.monzon@gmail.com" />
          <ContactInfoItem text="Campana, Buenos Aires, Argentina" />
        </div>
        {/* <div className="right">
          <ContactForm />
        </div> */}
      </div>
    </div>
  </ContactSectionStyle>
);

export default ContactSection;
