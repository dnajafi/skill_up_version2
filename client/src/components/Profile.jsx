import React from 'react';

const Dashboard = ({ 
	currentUser
}) => {

	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
	console.log(currentUser);

	return (
		<div className="profile-page">
			<div className="row">
				<div className="col-md-1"></div>
		    <div className="col-md-10">
		      <div className="col-md-3">
		        <img className="img-responsive profile-pic" src={currentUser.image_url} />
		      </div>
		      <div id="about" className="col-md-7 bio-box text-center">
		        <p>{currentUser.bio ? currentUser.bio : 'User has incomplete bio section'}</p>
		        <p>{currentUser.motto ? currentUser.motto : 'User has incomplete motto section'}</p>
		      </div>
		    </div>
	    	<div className="col-md-1"></div>
			</div>

			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10">
					<div className="col-md-5">
						<p>Current Followers</p>
					</div>
					<div className="col-md-5">
						<p>Curently Following</p>
					</div>
				</div>
				<div className="col-md-1"></div>
			</div>

			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-10">
					<p>Skills Section</p>
				</div>
				<div className="col-md-1"></div>
			</div>
			



  	</div>
	);
};

export default Dashboard;