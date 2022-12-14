
import { NavLink as Link, NavLink } from "react-router-dom"
import Person_Page from './PersonPage'
import MainPage from "./MainPage";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


  function App (){
    return(
        <Router>
        <Routes>
      <Route path="/"  exact element={<MainPage></MainPage>}/>
      <Route path="/1" exact element={<Person_Page></Person_Page>}/>
      <Route path="/2" exact element={<Person_Page></Person_Page>}/>
      <Route path="/3" exact element={<Person_Page></Person_Page>}/>
      <Route path="/4" exact element={<Person_Page></Person_Page>}/>
      <Route path="/5" exact element={<Person_Page></Person_Page>}/>
      </Routes>
      </Router>
    )
  }
  export default App;
