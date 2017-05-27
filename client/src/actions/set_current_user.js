import ActionTypes from '../constants/action_types';

export function setCurrentUser(userData) {
	return dispatch => {
		dispatch(setCurrentUserRequestedAction());
		dispatch(setCurrentUserFulfilledAction(userData));
	}
}

function setCurrentUserRequestedAction() {
	return {
		type: ActionTypes.SetCurrentUserRequested
	};
}

function setCurrentUserFulfilledAction(userData) {
	return {
		type: ActionTypes.SetCurrentUserFulfilled,
		userData
	};
}
