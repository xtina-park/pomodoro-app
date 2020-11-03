import React,  {useEffect, useRef} from 'react';
import Block from './Block';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;
`;

const Text = styled.h1`
    font-size: 40px;
`

const Button = styled.button`
    font-size: 20px;
`;

const Timer = ({timeLeft, setTimeLeft, isPaused, setIsPaused}) => {
    //REMINDER: TIMELEFT IS IN SECONDS
    let minutes = Math.floor(timeLeft/60);
    let seconds = Math.floor(timeLeft-60*minutes);

    let intervalRef = useRef();

    useEffect(()=>{
        const id = setInterval(()=>{
            {isPaused?
                clearInterval(intervalRef.current):
                setTimeLeft(timeLeft-1)
            }
        }, 1000)
        intervalRef.current=id;
        return () => clearInterval(intervalRef.current);
    });

    return (
        <>
        <Container>
            <Block param="Minutes" number={minutes}/><Text>:</Text><Block param="Seconds" number={seconds}/>
        </Container>
        <div align='center'>
            <Button onClick={()=>{
                setTimeLeft(0);
                setIsPaused(true);
            }}>Reset</Button>
        </div>
        </>
    )
}

export default Timer
