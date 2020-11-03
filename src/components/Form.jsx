import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import * as $ from 'jquery';

const Container = styled.div`
    display:flex;
    justify-content: center;
`;

const Input = styled.input`
    font-size: 20px;
    padding: 5px;
    margin: 0px 5px;
`;

const Text = styled.p`
    margin: 5px 5px;
    font-size: 20px;
`;

const Form = ({setTimeLeft, setIsPaused}) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data.minutes);
        $('#pomodoro-form').trigger("reset");
        setTimeLeft(data.minutes*60);
        setIsPaused(false);
    };

    return (
        <>
        <Container>
            <Text>Minutes:</Text>
            <form noValidate onSubmit={handleSubmit(onSubmit)} id='pomodoro-form'>
                <Input 
                    type='number' 
                    name='minutes' 
                    id='minutes-input'
                    ref={register({
                        required: {value: true, message: "Please enter the number of minutes that you would like to study for."},
                        min: {value: .01,  message: "Please enter a number between .01 and 100."},
                        max: {value: 100,  message: "Please enter number between .01 and 100."},
                    })}
                />
                <Input type='submit'/>
            </form>
        </Container>
        <div align='center'>{errors.minutes && <p>{errors.minutes.message}</p>}</div>
        </>
    )
}

export default Form
