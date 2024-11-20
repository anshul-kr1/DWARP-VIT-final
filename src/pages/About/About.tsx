import { useContext, useEffect } from 'react'
import MuiMarkdown from 'mui-markdown'
import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import { ShellContext } from 'contexts/ShellContext'
import {
  messageTranscriptSizeLimit,
  messageCharacterSizeLimit,
} from 'config/messaging'

const messageTranscriptSizeLimitFormatted = Intl.NumberFormat().format(
  messageTranscriptSizeLimit
)

const messageCharacterSizeLimitFormatted = Intl.NumberFormat().format(
  messageCharacterSizeLimit
)

export const About = () => {
  const { setTitle } = useContext(ShellContext)
  const theme = useTheme()

  useEffect(() => {
    setTitle('About')
  }, [setTitle])

  return (
    <Box
      className="About"
      sx={{
        p: 2,
        mx: 'auto',
        maxWidth: theme.breakpoints.values.md,
        '& p': {
          mb: 2,
        },
      }}
    >
      <MuiMarkdown>
        {`
### About DWARP-VIT

This Decentralized Realtime Chat App is designed to provide a secure, private, and efficient communication platform that can be used by individuals and small groups. Its core functionality revolves around establishing peer-to-peer connections using WebRTC to enable encrypted messaging, file transfers, and video communication. The app does not rely on centralized servers, making it a decentralized solution for privacy-conscious users. By allowing users to self-host and customize their instances, the app offers complete control over communication data.

This platform supports both public and private chat rooms where multiple users can join and interact. The chat rooms are ephemeral, meaning that no messages or data are saved once the chat session ends, enhancing security and privacy. This scope is especially beneficial for groups that require confidential communication, such as activists, journalists, and developers who need secure file sharing and video calls.

Moreover, the app's self-hostable nature ensures that users have the flexibility to deploy it in environments of their choosing, without being tied to any third-party infrastructure. This aspect expands its scope beyond personal use to organizational and enterprise-level applications where control over data is critical. Organizations can tailor the platform to meet specific communication needs, whether it's for internal communication, IT support, or secure collaboration.

This project also includes features such as file sharing, screen sharing, and markdown support, making it versatile for a wide range of use cases, including IT troubleshooting, content creation, and remote collaboration. As the app is open-source, the scope extends to contributions from the developer community, allowing future enhancements and modifications to suit evolving communication requirements.

Message size is limited to ${messageCharacterSizeLimitFormatted} characters.
        `}
      </MuiMarkdown>
    </Box>
  )
}
