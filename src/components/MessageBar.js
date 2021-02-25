import React from 'react';
import styled, { css } from 'styled-components';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ListIcon from '@material-ui/icons/List';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
  // import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function MessageBar() {
  return (
    <Container>
      <IconContainer>
        <ShortcutsIcon style={{ fontSize: 'small'}} />  
        <span>|</span>
        <BoldIcon style={{ fontSize: 'small'}} />
        <ItalicIcon style={{ fontSize: 'small'}} />
        <StrikethroughIcon style={{ fontSize: 'small'}} />
        <Code style={{ fontSize: 'small'}} />
        <Link style={{ fontSize: 'small'}} />
        <ListNumberedIcon style={{ fontSize: 'small'}} />
        <ListUnNumberedIcon style={{ fontSize: 'small'}} />
        <Blockquote style={{ fontSize: 'small'}} />
        <DevModeIcon style={{ fontSize: 'small'}} />
      </IconContainer>
      <IconContainer>
        <HideFormatting style={{ fontSize: 'small'}} />
        <Mentions style={{ fontSize: 'small'}} />
        <EmojiContainer>
          <Emoji style={{ fontSize: 'small'}} />
          {/* <EmojiHover style={{ fontSize: 'small'}} /> */}
        </EmojiContainer>
        <AttachFile style={{ fontSize: 'small'}} />
      </IconContainer>
    </Container>
  )
}

export default MessageBar

const Container = styled.div`
  background: #F8F8F8;
  color: #C8C8C8;
  height: 25px;
  border-top: 1px solid #DCDCDC;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
  
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px; 
  span {
    height: 90%;
    color: #DCDCDC;
  }
`;

const hoverClass = css`
  padding: 2px;
  margin: 0 1px;
  cursor: pointer;

  :hover {
    color: grey;
    background: #DCDCDC;
  }
`

const ShortcutsIcon = styled(FlashOnIcon)`
  ${hoverClass}
`

const BoldIcon = styled(FormatBoldIcon)`
  ${hoverClass}
`

const ItalicIcon = styled(FormatItalicIcon)`
  ${hoverClass}
`
const StrikethroughIcon = styled(StrikethroughSIcon)`
  ${hoverClass}
`
const Code = styled(CodeIcon)`
  ${hoverClass}
`

const Link = styled(LinkIcon)`
  ${hoverClass}
`

const ListNumberedIcon = styled(FormatListNumberedIcon)`
  ${hoverClass}
`

const ListUnNumberedIcon = styled(ListIcon)`
  ${hoverClass}
`

const Blockquote = styled(ViewHeadlineIcon)`
  ${hoverClass}
`

const DevModeIcon = styled(DeveloperModeIcon)`
  ${hoverClass}
`

// RIGHT HALF

const HideFormatting = styled(FormatColorTextIcon)`
  ${hoverClass}
`
const Mentions = styled(AlternateEmailIcon)`
  ${hoverClass}
`

const Emoji = styled(SentimentSatisfiedAltIcon)`
  ${hoverClass}
`;

const EmojiContainer = styled.div`
  display: flex;
  ${hoverClass}
`;

const AttachFile = styled(AttachFileIcon)`
  ${hoverClass}
`