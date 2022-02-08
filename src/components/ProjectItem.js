import React from 'react';
import styled from 'styled-components';
import CrudApp from '../assets/images/CrudApp.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

const ProjectItem = ({
  img = CrudApp,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  linkCode = 'www.google.com.ar',
}) => (
  <ProjectItemStyles>
    <a
      href={linkCode}
      target="_blank"
      rel="noreferrer"
      className="projectItem__img"
    >
      <img src={img} alt="project img" />
    </a>

    <div className="projectItem__info">
      <a href={linkCode} target="_blank" rel="noreferrer">
        <h3 className="projectItem__title">{title}</h3>
      </a>
      <p className="projectItem__desc">{desc}</p>
    </div>
  </ProjectItemStyles>
);

export default ProjectItem;
