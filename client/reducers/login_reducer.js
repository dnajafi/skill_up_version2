import ActionTypes from '../constants/action_types';

export function interestedReducer(state = {}, action) {

	switch(action.type) {
		case ActionTypes.SetCurrentUserRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: '',
				success: ''
			});
		}
		case ActionTypes.SetCurrentUserRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: 'Error in setting current user'
			});
		}
		case ActionTypes.SetCurrentUserFulfilled: {

			const { email, name, following, followers, skills, image_url, bio, motto } = action.data;

			return Object.assign({}, state, {
				inProgress: false,
				success: 'Successfully retrieved current user that is logged in.',
				email,
				name,
				following,
				followers,
				skills,
				image_url,
				bio,
				motto
			});


		}






		
	SetCurrentUserFulfilled: 'SET_CURRENT_USER_FULFILLED'



	}






}