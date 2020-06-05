// Packages:
import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

// Styles:
const Wrapper = styled.View`
  flex: 1;
  background-color: #74b9ff;
  align-items: center;
  justify-content: center;
`;

// Functions:
const App = () => {
  return (
    <Wrapper>
      <Text>Woo.</Text>
    </Wrapper>
  );
};

export default App;
