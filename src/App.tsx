
import { Box } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about';
import AllProjects from './components/allProjects';
import ResponsiveAppBar from './components/appbar';
import AutenthicatePage from './components/autenticate';
import Board from './components/board/board';
import CreateJiraIdeea from './components/createJira/createJira';
import Test from './components/test/test';
import useUser from './hooks/useUser';
interface Props {

}

const App: React.FC<Props> = ({ }) => {

  const [user, login] = useUser()


  return (
    <BrowserRouter>
      <ResponsiveAppBar user={user} />
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
        {!user && <Route path="/" element={<AutenthicatePage login={login} user={user} />} />}
        {user &&
          <>
            <Route path="/" element={<Board />} />
            <Route path="/cni" element={<CreateJiraIdeea />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/about" element={<About />} />
          </>
        }
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App