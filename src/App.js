import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <Router>
     <Nav />
     <Route exact path="/">
     <Home />
     </Route>

     <Route exact path="/about">
     <About />
     </Route>

     <Route exact path="/projects">
     <Projects />
     </Route>
    <Footer />
   </Router>
  );
}

export default App;
