
import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/about';
import ResponsiveAppBar from './components/appbar';
import Board from './components/board';
import CreateJiraIdeea from './components/createJira';
interface Props {

}

class App extends React.Component<Props> {
  render() {
    return (
      <>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="create-new-ideea" element={<CreateJiraIdeea />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </>

    );
  }
}

export default App;
