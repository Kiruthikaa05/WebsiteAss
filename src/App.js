
import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Component/Login'
import About from './Component/About'
import Home from './Component/Home'
import SignUp from './Component/SignUp'
import ContactUs from './Component/ContactUs'
import Example from './Component/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/about' element={<About/>}/>
          
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/contactus' element={<Example/>}/>
          

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
