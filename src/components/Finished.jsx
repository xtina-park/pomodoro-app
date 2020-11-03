import React, {useEffect} from 'react'
import Confetti from 'react-confetti'
import useSound from 'use-sound'
import styled from 'styled-components'

import DADAA from '../sound/DADAA.mp3'

const Text = styled.h1`
    margin: 20px 250px;
`

const Button = styled.button`
    font-size: 20px;
`;

const Finished = ({setTimeLeft, setIsPaused}) => {
    let width=window.innerWidth;

    const [play] = useSound(DADAA, { volume: .25 });

    useEffect(()=>{
        play();
    }, [play])

    return (
        <div align='center'>
            <Confetti width={width}/>
            <Text>Congratulations! You finished your Pomodoro. Go ahead and stretch your legs and take a break!</Text>

            <Button onClick={()=>{
                setTimeLeft(0);
                setIsPaused(true);
            }}>Reset</Button>
        </div>
    )
}

export default Finished
