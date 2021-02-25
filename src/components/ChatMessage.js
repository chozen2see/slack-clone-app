import React from 'react';
import styled from 'styled-components';

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/women/92.jpg" alt="user avatar"/>
      </UserAvatar>
      <MessageContent>
        <Name>
          Dvyne Dzyne
          <span>2/23/2021 11:33:55 AM</span>
        </Name>
        <Text>
          Super cool challenge!
        </Text>
      </MessageContent>
    </Container>
  )
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;

  :hover {
    background: #F5F5F5;
  }
`

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;

  margin-right: 8px;

  img {
    width: 100%;

  }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    font-weight: 400;
    font-size: 13px;
    color: rgb(97, 96, 97);
  }
`

const Text = styled.span`

`

