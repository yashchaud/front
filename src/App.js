
import GlobalStyle from './GlobalStyles';
import Model from './Model';
import Home from '../src/Pages/Home';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Spotifyplayer from './FrontUI/Spotifyplayer'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
      <Routes>
        
        <Route path="/" exact element={<Home />} />
        <Route path="/song" element={<Model/>} />
        <Route path="/new" element={<Spotifyplayer/>} />
        <Route path= "home" element={<Home/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
