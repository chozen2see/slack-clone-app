import React from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import MessageBar from './MessageBar';

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <MessageInput>
            <input type="text" name="" id="messageInput" placeholder="Message here..." />
            <SendButton>
              <Send />
            </SendButton>            
          </MessageInput>
          <MessageBar />
        </form>
      </InputContainer>
    </Container>
  )
}

export default ChatInput;

const Container = styled.div`
  padding: 0 20px 24px 20px;
`

const InputContainer = styled.div`
  border: 1px solid #8D8D8E;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
  }
`

const MessageInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  padding-left: 10px;

  input {
    flex: 1;
    border: none;
    font-size: 13px;
  }

  input:focus {
    outline: none;
  }
`

const SendButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;

  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`

const Send = styled(SendIcon)`
  color: #D9D9D9;
`