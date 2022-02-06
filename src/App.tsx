
import { Box } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/about';
import ResponsiveAppBar from './components/appbar';
import Board from './components/board/board';
import CreateJiraIdeea from './components/createJira/createJira';
interface Props {

}

class App extends React.Component<Props> {
  render() {
    return (
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

    );
  }
}

export default App;
