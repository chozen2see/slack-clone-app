import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Header() {
  return (
    <Container>
      {/* Time | Search | Help */}
      <Main>
        {/* Need to use icons from material ui icons */}
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" name="" id="" placeholder="Search" />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      {/* User and Profile Image */}
      <UserContainer>
        <Name>
          Dvyne Dzyne
        </Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png" alt="" />
          {/* <AccountBoxIcon /> */}
        </UserImage>
      </UserContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  background: var(--default-theme-header-background);
  color: var(--default-theme-text);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
  display: flex;
  margin: 0 16px;

`

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`

const Search = styled.div`
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: var(--default-theme-text);
    width: 97%;
  }

  input:focus {
    outline: none;
  }

`
// make UserContainer absolute to the Container
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;

  position: absolute;
  right: 0;
`

const Name = styled.div`
  padding-right: 16px;
`

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid var(--default-theme-text);
  border-radius: 3px;

  img {
    width: 100%;
  }
`