import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavLink from './components/NavLink/NavLink';
import Profile from './components/Profile/Profile';
import Dragons from './components/Dragons/Dragons';
import Rockets from './components/Rockets';
import { fetchRockets } from './redux/rockets/rockets';
import { getDragons } from './redux/dragons/dragons';
import { getMissions } from './redux/missions/missions';
import Missions from './components/Missions/Missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(getDragons());
    dispatch(getMissions());
  }, []);

  return (
    <Router>
      <NavLink />
      <Switch>
        <Route path="/dragons" component={Dragons} />
        <Route path="/rockets" component={Rockets} />
        <Route path="/missions" component={Missions} />
        <Route path="/" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
