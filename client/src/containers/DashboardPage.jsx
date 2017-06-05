import React from 'react'
import Auth from '../modules/Auth'
import Dashboard from '../components/Dashboard.jsx'
import { connect } from 'react-redux'
import getCurrentUser from '../reducers/login_reducer'



class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      currentUser: {}
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  viewProfile() {
    this.props.router.replace('/profile');
  }
  

  render() {
    return (<Dashboard secretData={this.state.secretData} currentUser={this.props.currentUser} viewProfile={this.viewProfile.bind(this)} />);
  }


}

const mapStateToProps = state => ({
  currentUser: state.loginState.currentUser || localStorage.getItem('currentUser'),
});

// const DashboardPage = connect(mapStateToProps, {})(Dashboard);

export default connect(mapStateToProps, {})(DashboardPage);

// export default DashboardPage;






