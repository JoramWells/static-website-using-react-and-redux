import Footer from "./components/index_view/Footer";
import Header from "./components/index_view/Header";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import About from './components/pages/About'
import IndexRoute from './IndexRoute'



function App() {
  return (
    <>
        <Header />
    <Router>
      <Route path="/" exact component={IndexRoute} />
      <Route path="/about" component={About} />
      
    </Router>

    <Footer />

    </>
  );
}

export default App;
