import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10vw;

  & > * {
    margin: 1em;
    padding: 1em;
  }
`;

export default Grid;
