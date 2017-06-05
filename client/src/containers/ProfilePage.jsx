import React from 'react';

const profileStyle = {
  paddingTop: 45,
  marginTop: 24
};

export default class ProfilePage extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentWillMount(){
    document.body.style.backgroundColor = "#A9A9A9";
  }
  
  componentWillUnmount(){
    document.body.style.backgroundColor = null;
  }

  componentDidMount() {
    this.props.onGetInterest();
  }

  render() {
  	// const { teacher, image_url, description, motto } = this.props.data;

    return (
      <div>
        <p>This is GOD</p>
      </div>
    );
  }
}