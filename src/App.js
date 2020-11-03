import React, {useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  padding: 50px 0px;

  background: #FF2F91;
  color: whitesmoke;

  text-shadow: 2px 2px grey;

  margin-bottom: 20px;
`;

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <>
      <Title>POMODORO APP</Title>
      <Form setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
      {timeLeft<0?
        <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>:
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} 
        isPaused={isPaused} setIsPaused={setIsPaused}/>
      }
    </>
  );
}

export default App;
