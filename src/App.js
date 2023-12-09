import Cell from './components/Cell';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Epk from './components/Epk';
import Tour from './components/Tour';
import Hypercubx from './components/Hypercubx';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <main className="container"> 
        <div className="App">
        <Routes>
          <Route path='/' element={<Cell cellW="40"/>} />
          <Route path='/home' element={( <Home /> )} />
          <Route path='/gallery' element={( <Gallery /> )} />
          <Route path='/tour' element={( <Tour /> )} />
          <Route path='/epk' element={(<Epk/>)} />
          <Route path='/hypercubx' element={(<Hypercubx/>)} />
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
