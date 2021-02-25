import React from 'react';
import styled from 'styled-components';

import { auth, provider } from '../context/firebase';

function Login({ setUser }) {

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        const newUser = { 
          name: result.user.displayName, 
          photo: result.user.photoURL
        }
        // set user state using setUser function, passed from App
        setUser(newUser);
        // stringy JSON obj to string
        localStorage.setItem('user', JSON.stringify(newUser));
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  return (
    <Container>
      <Content>
        <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
        <h1>Slacky Clone</h1>
        <SignInButton onClick={() => signIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const SlackImg = styled.img`
  height: 100px;
  margin-bottom: 10px;
`

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  padding: 0 10px;
`
