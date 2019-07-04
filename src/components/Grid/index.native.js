import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Item = styled.View`
  padding: 10px;
  margin: 10px;
`;

const Grid = ({ children }) => (
  <SafeAreaView>
    <ScrollView>
      <Container>
        {React.Children.map(children, child => (
          <Item>{child}</Item>
        ))}
      </Container>
    </ScrollView>
  </SafeAreaView>
);

export default Grid;
