import Cell from './components/Cell';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { FaBandcamp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <main className="container"> 
        <div className="App">
        <Routes>
          <Route path='/' element={<Cell cellW="40"/>} />
          <Route path='/home' element={(
            <div>    
              <h1><Link to='/' style={{textDecoration:'none',color:'black'}}>\unexCoder Web App</Link></h1>
              <h2 style={{color:'#ff2851'}} >v.1.0.0</h2>  
            </div>    
          )} />
          <Route path='/about' element={(
            <About />
          )} />
          <Route path='*' element={(
            // <NotFound />
            <div className='content'>    
              <h1 style={{margin:'0'}}><Link to='/' style={{textDecoration:'none',color:'green',fontSize:'1.5em'}}>\unexCoder Web App</Link></h1>
              <h1 style={{color:'#ff00ff'}}>Not Found</h1>
            </div>
          )} />
        </Routes>
        </div>  
      </main> 
    </Router>
  );
}

export default App;
