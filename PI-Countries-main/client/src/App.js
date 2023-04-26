import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
// import Landing from './components/LandingPage';
// import Home from "./components/Card";
// import Detail from './components/Detail';
// import Form from './components/Form';
import { Home, Form, Detail, Landing, About } from "./views";
import NavBar from "./components/NavBar";


function App() {
  const [countries, setCountries] = useState([]);

  const myFunc = async () => {
    const apiData = await axios.get("http://localhost:3001/countries");
    setCountries(apiData.data)                                            
  };

  useEffect(() => {
    myFunc();
  }, []);




  return (
    <div className="App">
      {countries.length ? (
        countries.map((c) => <p key={c.id}>{c.name}</p>)
         ) : (
          <p>Loading...</p>
      )}
      <NavBar />
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/form" component={Form}/>
      <Route path="/about" component={About}/>
      
    </div>
  );
}

export default App;
