import ActionTypes from '../constants/action_types';
import store from '../store/store'

export default function setCurrentUser(userData) {
	var requestSetUserPromise = new Promise((resolve, reject) => {
		var userRequestedAction = setCurrentUserRequestedAction();
		resolve(store.dispatch(userRequestedAction));
	});

	var fulfillSetUserPromise = new Promise((resolve, reject) => {
		var fulfillAction = setCurrentUserFulfilledAction(userData);
		resolve(store.dispatch(fulfillAction));
	});

	var promises = [requestSetUserPromise, fulfillSetUserPromise];
	return promises;
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
