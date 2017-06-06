import React from 'react'
import Profile from '../components/Profile.jsx'
import { connect } from 'react-redux'

const profileStyle = {
  paddingTop: 45,
  marginTop: 24
};

class ProfilePage extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentWillMount(){
    // document.body.style.backgroundColor = "#A9A9A9";
  }
  
  componentWillUnmount(){
    // document.body.style.backgroundColor = null;
  }

  componentDidMount() {
    // this.props.onGetInterest();
  }

  render() {

    return (
      <div>
        <Profile currentUser={this.props.currentUser} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.loginState.currentUser
});

export default connect(mapStateToProps, {})(ProfilePage);