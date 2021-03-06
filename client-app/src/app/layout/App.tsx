import React, { Fragment, useContext, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import NotFound from './NotFound';
import { ToastContainer } from 'react-toastify';
import LoginForm from '../../features/user/LoginForm';
import { RootStoreContext } from '../stores/rootStore';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';
import ProfilePage from '../../features/profiles/ProfilePage';
import Addmembers from '../../features/user/addmembers';
import HomeAdmin1 from '../../features/home/HomeAdmin1';
import MemberForm from '../../features/members/form/MemberForm';
import MembersList from '../../features/members/dashboard/MembersList';
import { MemberDashboard } from '../../features/members/dashboard/MemberDashboard';
import MemberDetails from '../../features/members/details/MemberDetails';
import RegistrationForm from '../../features/user/RegistrationForm';
import Success from './Success';
import PrivateRoute from './PrivateRoute';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const rootStore = useContext(RootStoreContext);
  const { setAppLoaded, token, appLoaded } = rootStore.commonStore;
  const { getUser } = rootStore.userStore;

  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [getUser, setAppLoaded, token]);

  if (!appLoaded) return <LoadingComponent content="Loading app.." />;

  return (
    <Fragment>
      <ToastContainer position="bottom-right" />
      <ModalContainer />
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: '8em' }}>
              <Switch>
                <Route
                  exact
                  path="/registration"
                  component={RegistrationForm}
                />

                <PrivateRoute
                  exact
                  path="/activities"
                  component={ActivityDashboard}
                />
                <PrivateRoute
                  path="/activities/:id"
                  component={ActivityDetails}
                />

                {/* <Route exact path="/members" component={MemberDashboard} /> */}

                <PrivateRoute
                  key={location.key}
                  path="/homeAdmin1"
                  component={HomeAdmin1}
                />

                <PrivateRoute
                  exact
                  path="/members"
                  component={MemberDashboard}
                />

                <PrivateRoute
                  key={location.key}
                  path="/member/details"
                  component={MemberDetails}
                />

                <Route
                  key={location.key}
                  path={['/addMembers', '/editMembers/:id']}
                  component={MemberForm}
                />

                <Route
                  key={location.key}
                  path={['/createActivity', '/manage/:id']}
                  component={ActivityForm}
                />

                <Route path="/profile/:username" component={ProfilePage} />

                {/* <Route path='/login' component={LoginForm} /> Will cater this later */}

                <Route exact path="/success" component={Success} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
