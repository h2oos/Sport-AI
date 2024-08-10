'use client'
import Image from 'next/image'
import { useState} from 'react'
import { Box, Stack } from '@mui/material'

export default function Home(){
  const [messages, setMessages] = useState({
    role: 'assistant',
    content: `Hi! I'm a basketball chatbot. Ask me questions you have about teams, players, games, stats, and other NBA-related topics` , 
  })

  const [message, setMessage] = useState('')
  
  return(
  <Box 
    width="100vh" 
    height="100vh" 
    display="flex" 
    flexDirection="column" 
    justifyContent="center" 
    alignItems="center"
  >
    <Stack
        direction={'column'}
        width="500px"
        height="700px"
        border="1px solid black"
        p={2}
        spacing={3}
    >
      <Stack
          direction={'column'}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
      >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                bgcolor={
                  message.role === 'assistant'
                    ? 'primary.main'
                    : 'secondary.main'
                }
                color="white"
                borderRadius={16}
                p={3}
              >
                {message.content}
              </Box>
            </Box>
          ))}
      </Stack>
    </Stack>    
  </Box>)
} 
