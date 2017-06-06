import React from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';


// const Dashboard = ({ 
// 	secretData,
// 	currentUser
// }) => (
//   <Card className="container">
//     <CardTitle
//       title="Dashboard"
//       subtitle="You should get access to this page only after authentication."
//     />

//     {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
//   </Card>
// );

const Dashboard = ({ 
	secretData,
	currentUser,
	viewProfile
}) => {

	return (
		<div>

			<Card className="container">
		    <CardTitle
		      title="Welcome to Your Dashboard"
		      subtitle="You should get access to this page only after authentication."
		      children="hello"
		    />
	  	</Card>

	  	<div>
	  		<CardText><Link to={'/profile'}>View Your Profile</Link>.</CardText>
	  		<p>View Your Skills</p>
	  		<p>View Your Followers</p>

	  		<p>Add a Dashboard Link to Log out button above</p>

	  	</div>

  	</div>

	);

  
};

export default Dashboard;
