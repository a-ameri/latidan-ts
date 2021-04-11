import {useEffect} from 'react'
import Login from './login/login';
import Main from './main/main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 



function App() {

  // slight update to account for browsers not supporting e.which
  function disableF5(e:any) {
    if ((e.which || e.keyCode) === 116)
    e.preventDefault();
  }

  useEffect(()=>{
  // To disable f5
  $(document).on("keydown", disableF5);
  },[])

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Main" component={Main} />
      </Switch>
      
    </Router>
  );
}

export default App;
