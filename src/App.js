  import * as React from 'react';
  import styled from 'styled-components';
  import Game from './components/game';

  const AppWrapper = styled.div`
    background-color: #3366ff;
    margin: 25%;
    margin-top: 5%;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  `;

  function App() {
    return (
      <AppWrapper>
        <h1>GUESS THE MOVIE</h1>
        <Game></Game>
      </AppWrapper>
    );

  }

  export default App;