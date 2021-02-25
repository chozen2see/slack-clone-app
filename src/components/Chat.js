import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

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
        <ChannelDetails>
          <div>Details</div> 
          <Info />
        </ChannelDetails>
      </Header>

      <MessageContainer>
        <ChatMessage />
      </MessageContainer>

      <ChatInput />
    </Container>
  )
}

export default Chat;


const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content; // take up as much space at minimum that it needs
  // margin: 0 15px;
`

const Header = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(83, 39, 83, .13);
`

const ChannelContainer = styled.div`

`

const Name = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Description = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`

const ChannelDetails = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #606060;
`

const MessageContainer = styled.div`

`



// can import component and assume all of its styles plus add new styles
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`