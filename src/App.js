import Home from './pages/Home';
import GlobalStyles from './styles/global';
import { CountryProvider } from './contexts/CountryContext';
import Country from './pages/Country';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <CountryProvider>
        <Switch>
          <Route path="/country/:id">
            <Country />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <GlobalStyles />
      </CountryProvider>
    </Router>
  );
};

export default App;
