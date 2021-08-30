import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/rockets" component={Rockets} />
          <Route path="/missions" component={Missions} />
          <Route path="/dragons" component={Dragons} />
          <Route path="/" exact component={Profile} /> */}
          <Route path="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
