
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const pageSize = 5;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key='general' apiKey={apiKey} pageSize={pageSize} country='us' category='general' />} />
          <Route exact path='/business' element={<News key='business' apiKey={apiKey} pageSize={pageSize} country='us' category='business' />} />
          <Route exact path='/entertainment' element={<News key='entertainment' apiKey={apiKey} pageSize={pageSize} country='us' category='entertainment' />} />
          <Route exact path='/general' element={<News key='general' apiKey={apiKey} pageSize={pageSize} country='us' category='general' />} />
          <Route exact path='/health' element={<News key='health' apiKey={apiKey} pageSize={pageSize} country='us' category='health' />} />
          <Route exact path='/science' element={<News key='science' apiKey={apiKey} pageSize={pageSize} country='us' category='science' />} />
          <Route exact path='/sports' element={<News key='sports' apiKey={apiKey} pageSize={pageSize} country='us' category='sports' />} />
          <Route exact path='/technology' element={<News key='technology' apiKey={apiKey} pageSize={pageSize} country='us' category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;