import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context';
import { ThemeProvider, createTheme } from '@mui/material';
import { pink, purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: pink[300],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: '#FFD7EA',
        },
      },
      defaultProps: {
        color: 'inherit',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
