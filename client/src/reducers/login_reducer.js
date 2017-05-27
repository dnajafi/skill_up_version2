import ActionTypes from '../constants/action_types';

export function loginReducer(state = {}, action) {
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
			return Object.assign({}, state, {
				inProgress: false,
				success: 'Successfully retrieved current user that is logged in.',
				currentUser: action.userData
			});
		}
		default:
			return state;
	}
}

// export const getCurrentUser = state => state.currentUser;

// export function getCurrentUser(state) {
// 	return state.currentUser;
// }