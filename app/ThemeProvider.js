// app/ThemeProvider.js
'use client';

import { CssBaseline } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from 'prop-types'

const theme = createTheme({
    palette: {
        primary: {main: '#0959AA'},
        secondary: {main: '#6709AA'},
        error: {main: red[500]},
        success: {main: green[500]},
        background: {default: '#f5f5f5', paper: '#ffffff'},
        text: {primary: '#333333', secondary: '#777777'}
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif'
    }
});

const ThemeProviderComponent = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

ThemeProviderComponent.propTypes = {
    children: PropTypes.node.isRequired
}

export default ThemeProviderComponent;