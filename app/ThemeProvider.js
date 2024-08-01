// app/ThemeProvider.js
'use client';

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from 'prop-types'

const theme = createTheme({
  typography: {fontFamily: 'Poppins, Arial, sans-serif'}
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