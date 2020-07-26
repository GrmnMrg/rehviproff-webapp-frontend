import { extendObservable } from 'mobx';

class UserStore {

	constructor() {
		extendObservable(this, {

			loading: true,
			isLoggedIn: false,
			username: '',
			error: false

		});
	}

}

export default new UserStore();