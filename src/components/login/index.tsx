import React from 'react';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import styled from "@emotion/styled";
import imgPost from 'image/jpg/imgPosts.jpg'

const WrapperLogin = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  margin: 0 auto;
`

const BoxStyled = styled(Box)`
  width: 400px;
  height: 500px;
  border: 1px solid rgba(141, 141, 143, 0.66);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
`
const HeaderBox = styled.form`
  height: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
`

const ImageStyled = styled.div`
  img {
    width: 600px;
    height: 100%;
  }


`
const ButtonStyled = styled(Button)`
  font-size: 0.4em;
  font-family: 'Itim', -cursive;
  &:hover {
    background-color: #570d0d;
  }
`

const TitleStyled = styled.div`
  width: 200px;
  font-size: 1em;
  align-self: center;
`


const Login = () => {
    const {handleSubmit, control,reset} = useForm<IFormInput>({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        reset()
    };

    return (
        <WrapperLogin>
            <Container>
                <ImageStyled>
                    <img src={imgPost} alt=""/>
                </ImageStyled>
                <BoxStyled>
                    <BoxStyled>
                        <HeaderBox onSubmit={handleSubmit(onSubmit)}>
                            <TitleStyled>ContentPosts</TitleStyled>
                            <Controller
                                control={control}
                                name="email"
                                render={({
                                             field
                                         }) => (
                                    <TextField {...field} label="email" variant="filled"/>
                                )}
                            />
                            <Controller
                                control={control}
                                name="password"
                                render={({
                                             field
                                         }) => (
                                    <TextField {...field} label="password" variant="filled"/>
                                )}
                            />
                            < ButtonStyled type="submit" variant="contained">
                                Send
                            </ButtonStyled>
                        </HeaderBox>
                    </BoxStyled>
                </BoxStyled>
            </Container>
        </WrapperLogin>
    );
};

export default Login;


type IFormInput = {
    email: string;
    password: string;
}