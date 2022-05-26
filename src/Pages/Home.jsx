import React from 'react'
import NavBar from '../Component/NavBar'
//import{Button} from 'react-bootstrap'
//import { useNavigate } from 'react-router-dom'


function Home() {
 //const navigate=useNavigate()
  return (
    
    <div style={{
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg)',
      height: "300%", backgroundRepeat: "no-repeat"
    }}>
        <NavBar/>
        
    </div>
  )
}

export default Home