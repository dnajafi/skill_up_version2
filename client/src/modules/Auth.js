class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   */
  static authenticateUser(token, userData) {
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', userData);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  /**
   * Get a token value.
   */
  static getToken() {
    return localStorage.getItem('token');
  }

}

export default Auth;