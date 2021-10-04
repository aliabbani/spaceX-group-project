import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';
import NotMatch from '../pages/NotMatch';

function TravelContainer() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}

export default TravelContainer;
