import { Suspense } from "react";
import NavBar from "./components/NavBar";
import { pages } from "./utils/Pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar pages={pages} />
        <div className="content">
          <Suspense fallback={<div />}>
            <Switch>
              {pages.map((page, index) => (
                <Route
                  exact
                  path={page.pageLink}
                  component={page.view}
                  key={index}
                />
              ))}
            </Switch>
            <Redirect to="/" />
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
