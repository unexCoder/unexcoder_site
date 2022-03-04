import Cell from './components/Cell';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {

  return (
    <Router>
      <main className="container"> 
        <div className="App">
        <Routes>
          <Route path='/' element={<Cell/>} />
          <Route path='/home' element={(
            <div>    
              <h1><Link to='/' style={{textDecoration:'none',color:'black'}}>\unexCoder Web App</Link></h1>
              <h2 style={{color:'#ff2851'}} >v.1.0.0</h2>  
            </div>    
          )} />
          <Route path='*' element={(
            <div>    
              <h1><Link to='/' style={{textDecoration:'none',color:'black'}}>\unexCoder</Link></h1>
              <h1 style={{color:'#ff2851'}}>Not Found</h1>
            </div>
            // <NotFound />
          )} />
        </Routes>
        </div>  
      </main> 
    </Router>
  );
}

export default App;
