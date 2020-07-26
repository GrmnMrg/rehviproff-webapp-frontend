class UserAPICalls {

  /**
    * Do a check against the backend API and check if the user is logged in.
    * If true return the result of the response. Else just return false.
    */
  static async doCheckIfUserIsLoggedIn() {

    try {

      let response = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let isValidJson = UserAPICalls.checkIfResponseIsValidJSON(response);

      if (isValidJson) {
        
        let result = await response.json();
        return result;

      } else {

        console.log("Error in 'doCheckIfUserIsLoggedIn': API call result is not a valid JSON");
        return false;

      }      

    } catch(e) { console.error(e); }

  }

  /**
    * Try to log in the user and on success return the result of the response.
    * Else return false.
    */
  static async doLogin(loginState) {

    try {

      let response = await fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: loginState.username,
          password: loginState.password
        })
      });

      let isValidJson = UserAPICalls.checkIfResponseIsValidJSON(response);

      if (isValidJson) {
        
        let result = await response.json();
        return result;

      } else {

        console.log("Error in 'doLogin': API call result is not a valid JSON");
        return false;

      }

    } catch(e) { console.error(e); }

  }

  /**
    * Try to logout the user and on success return the result of the response.
    * Else return false.
    */
  static async doLogout() {

     try {

      let response = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let isValidJson = UserAPICalls.checkIfResponseIsValidJSON(response);

      if (isValidJson) {
        
        let result = await response.json();
        return result;

      } else {

        console.log("Error in 'doLogout': API call result is not a valid JSON");
        return false;

      }

    } catch(e) { console.error(e); }

  }

  /**
    * Helper method to check if the response type is JSON
    */
  static checkIfResponseIsValidJSON(response) {
    const contentType = response.headers.get("content-type");
    return (contentType && contentType.indexOf("application/json") !== -1);
  }

}

export default UserAPICalls;