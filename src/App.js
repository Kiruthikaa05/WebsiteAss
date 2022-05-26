import './App.css';
import React from 'react';
import useContext from './Component/useContext';

export const context=React.createContext();
export const consume=React.createContext();
function App() {
  return (
    <div className="App">
    <context.Provider value={kiruthikaa}>
      <consume.Provider  value={Engineer} >
        <useContext/>
      </consume.Provider>  
    </context.Provider>
    </div>
    
  );
}

export default App;
