import { useState } from 'react'
import * as React from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { theme } from './theme';


function App() {

  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'dark' ? theme.palette.success.main : theme.palette.primary.main,
      },
      text: {
        primary: mode === 'dark'
          ? theme.palette.success.contrastText
          : theme.palette.primary.contrastText,
      }
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
          <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App
