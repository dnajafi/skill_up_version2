import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';
// import setCurrentUser from './actions'
import setCurrentUser from './actions/set_current_user'


const routes = {
  // Root component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        Promise.all(setCurrentUser({})) // set the current user to an empty object after logging out
          .then(() => {
            // change the current URL to /
            replace('/');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

  ]
};

export default routes;