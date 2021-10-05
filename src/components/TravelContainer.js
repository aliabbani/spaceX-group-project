import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';
import NotMatch from '../pages/NotMatch';
import { fetchPostsRequestRockets, fetchPostsRequestMissions } from '../redux/reducers/dataReducers';

function TravelContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequestRockets());
    dispatch(fetchPostsRequestMissions());
  }, []);
  const rocketsTemp = useSelector((state) => state.spaceReducer.rockets);
  const rockets = { rocketsTemp };

  const missions = useSelector((state) => state.spaceReducer.missions);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Rockets rockets={rockets} />
        </Route>
        <Route path="/missions">
          <Missions missions={missions} />
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
