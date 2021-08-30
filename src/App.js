import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavLink from './components/NavLink/NavLink';
import store from './redux/configureStore';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavLink />
        <Switch>
          {/* <Route path="/rockets" component={Rockets} />
          <Route path="/missions" component={Missions} />
          <Route path="/dragons" component={Dragons} /> */}
          <Route path="/" exact component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
