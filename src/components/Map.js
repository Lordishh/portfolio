import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

const Map = () => (
  <MapStyles>
    <div className="container">
      <div className="map__card">
        <h3 className="map__card__heading">Aquí estoy</h3>
        <PText>Campana, Provincia de Buenos Aires, Argentina</PText>
        <a
          href="https://goo.gl/maps/AM6T2WAi9RrMZNAUA"
          target="_blank"
          rel="noreferrer"
          className="map__card__link"
        >
          Abrir en Google Map
        </a>
      </div>
    </div>
  </MapStyles>
);

export default Map;
