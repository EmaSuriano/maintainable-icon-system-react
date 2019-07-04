import React from 'react';
import styled from 'styled-components';

const LandmarkContainer = styled.div`
  background: ${props => props.background || '#FFF'};
  position: relative;
  display: block;
  border-radius: 50%;
  margin: 1em;
`;

const LandmarkIcon = styled.div`
  padding: 1em;
`;

const LandmarkLabel = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff6;
  border-radius: 50%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

const Landmark = ({ children, label, background }) => (
  <LandmarkContainer background={background}>
    <LandmarkIcon>{children}</LandmarkIcon>
    <LandmarkLabel>
      <h1>{label}</h1>
    </LandmarkLabel>
  </LandmarkContainer>
);

export default Landmark;
