import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat () {
  return (
    <Container>
      <Header>
        <ChannelContainer>
          <Name>
            # clever
            <StarBorderIcon style={{ fontSize: 'medium' }} />
          </Name>
          <Description>
            Company-wide announcements and work-based matters
          </Description>
        </ChannelContainer>
        <DetailsContainer>
          Details
          <InfoOutlinedIcon />
        </DetailsContainer>
      </Header>
      <History>
        Chat History
      </History>
      <NewChatMessage>
        New Chat Message
      </NewChatMessage>
    </Container>
  )
}

export default Chat;


const Container = styled.div`
  display: grid;
  grid-template-rows: 10% auto 8%;
  margin: 0 15px;
`

const Header = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`

const ChannelContainer = styled.div`

`

const Name = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
`

const Description = styled.div`
  font-size: small;
`

const DetailsContainer = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const History = styled.div`

`

const NewChatMessage = styled.div`

`