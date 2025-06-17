/**
 * The theme is passed as a prop from the ThemeProvider, which wraps your <App /> component.
 * The ThemeProvider makes your custom theme available to the entire React component tree.
 * Every MUI component and every styled() component inside < App /> (and its children) will have access to the theme via props.
 */

import { createTheme } from '@mui/material'
import React from 'react'


export const theme = createTheme({
    palette: {
        primary: {
            main: "#f5f5f5",           // background color (very light)
            contrastText: "#3c3c3c",   // text color that appears on top of `main`
        },
        success:{ 
            main: "#3c3c3c",           // dark background
            contrastText: "#ffffff",   // white text
        }
    }
});
