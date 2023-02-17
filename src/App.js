
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path='/' element={<News key='general' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='general' />} />
          <Route exact path='/NewsBlast' element={<News key='general' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='general' />} />
          <Route exact path='/business' element={<News key='business' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='business' />} />
          <Route exact path='/entertainment' element={<News key='entertainment' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='entertainment' />} />
          <Route exact path='/general' element={<News key='general' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='general' />} />
          <Route exact path='/health' element={<News key='health' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='health' />} />
          <Route exact path='/science' element={<News key='science' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='science' />} />
          <Route exact path='/sports' element={<News key='sports' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='sports' />} />
          <Route exact path='/technology' element={<News key='technology' setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='us' category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;