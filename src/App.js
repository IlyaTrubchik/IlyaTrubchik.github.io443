
import { NavLink as Link, NavLink } from "react-router-dom"
import Person_Page from './PersonPage'
import MainPage from "./MainPage";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


  function App (){
    return(
        <Router>
        <Routes>
      <Route path="/"  exact element={<MainPage></MainPage>}/>
      <Route path="/1" exact element={Person_Page(1)}/>
      <Route path="/2" exact element={Person_Page(2)}/>
      <Route path="/3" exact element={Person_Page(3)}/>
      <Route path="/4" exact element={Person_Page(4)}/>
      <Route path="/5" exact element={Person_Page(5)}/>
      </Routes>
      </Router>
    )
  }
  export default App;
