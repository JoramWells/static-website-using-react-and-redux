import Footer from "./components/index_view/Footer";
import Header from "./components/index_view/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import IndexRoute from "./IndexRoute";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={IndexRoute} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
