import Footer from "../Layout/Footer";
import Home from "../Layout/Home";
import Navbar from "../Layout/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import History from "../Component/History";
import ContactUs from "../Component/ContactUs";
import Province from "../Component/Province";

const App = () => {
    return ( 
        <div className="app">
           <Router>
           <Navbar/>
             <Switch>
               <Route path exact='/'>
                  <Home/>
               </Route>
               <Route path ='/history'>
                  <History/>
               </Route>
               <Route path ='/contactUs'>
                  <ContactUs/>
               </Route>
               <Route path ='/province'>
                  <Province/>
               </Route>
             </Switch>
             <Footer/>
           </Router>
          
        </div>
     );
}
 
export default App;