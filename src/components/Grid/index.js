import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: 0 10vw;

  & > * {
    margin: 1em;
    padding: 1em;
  }
`;

export default Grid;
