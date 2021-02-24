import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItemsData, channelData } from '../context/SidebarData';

function Sidebar() {

  const changeTheme = () => {
    document.getElementById('root').classList.toggle("dark-mode");
  }

  return (
    <Container>
      <WorkspaceContainer>
        <Name>
          DvyneWorkSpace
        </Name>
        <NewMessage>
          {/* plus icon */}
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>

      <MainChannels>
        {
          sidebarItemsData.map((item) => {
            return (
              <MainChannelItem>
                {item.icon}
                {item.text}
              </MainChannelItem>
            )

          })
        }
      </MainChannels>

      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
            </div>
          <AddIcon style={cursorPointer} />
        </NewChannelContainer>

        <ChannelsList>
          {
            channelData.map(channel => {
              return (
                <Channel>
                  # { channel.name}
                </Channel>
              )
            })
          }
        </ChannelsList>
      </ChannelsContainer>

      <ChangeTheme>
        <button onClick={changeTheme}>Change Theme</button>
      </ChangeTheme>

    </Container>
  )
}

export default Sidebar;

// Styled Components
const Container = styled.div`
 background: var(--default-theme-sidebar-background);
 position: relative;
`

const WorkspaceContainer = styled.div`
  color: var(--default-theme-text);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  border-bottom: 1px solid var(--default-theme-workspace-border-bottom);
`

const Name = styled.div`

`

const NewMessage = styled.div`
  background: var(--default-theme-text);
  width: 36px;
  height: 36px;
  color: var(--default-theme-sidebar-background);
  fill: var(--default-theme-sidebar-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`

const MainChannels = styled.div`
  padding-top: 20px;
`

const MainChannelItem = styled.div`
  color: var(--default-theme-channel-item-text);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: var(--default-theme-header-background);
  }
`

const ChannelsContainer = styled.div`
  color: var(--default-theme-channel-item-text);
  margin-top: 10px;

`

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: var(--default-theme-header-background);
  }
`
const ChangeTheme = styled.div`
  padding: 25px 0;

  button {
    position: absolute;
    bottom: 0;  
    width: 100%;
    cursor: pointer;
    margin-bottom: 10px;
  }
`

const cursorPointer = { cursor: 'pointer' };
