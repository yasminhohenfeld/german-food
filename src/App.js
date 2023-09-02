import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Head from './Components/Head';
import Body from './Components/Body';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
      <Head/>
      <Body/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;