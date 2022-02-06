
import { Box, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about';
import ResponsiveAppBar from './components/appbar';
import Board from './components/board/board';
import CreateJiraIdeea from './components/createJira/createJira';
interface Props {

}
const divider = 2
let theme = createTheme({

});
theme = createTheme(theme, {
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {

      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em"
    },
    h2: {

      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em"
    },
    h3: {

      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em"
    },
    h4: {

      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em"
    },
    h5: {

      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em"
    },
    h6: {

      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em"
    },
    subtitle1: {

      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em"
    },
    subtitle2: {

      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em"
    },
    body1: {

      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    body2: {

      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em"
    },
    button: {

      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase"
    },
    caption: {

      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em"
    },
    overline: {

      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase"

    }
  }
})

class App extends React.Component<Props> {
  render() {
    // console.log(JSON.stringify(theme))
    return (
      // <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Box sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          background: "url(./cnj.png)",
          backgroundSize: "cover !important",
          backgroundRepeat: "no-repeat !important",
          backgroundPositionY: "center",
          backgroundPositionX: "50vw",
          zIndex: -1
        }} />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/cni" element={<CreateJiraIdeea />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      // </ThemeProvider>
    );
  }
}

export default App;
