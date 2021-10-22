const GetUserToken = sessionStorage.getItem('token');

export const SmartHomeURL = 'http://15.165.77.151:8000';

export const headers = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}

export const UserHeaders = {
  headers: {
    "Authoriation": `Token ${GetUserToken}`,
    "Content-Type": "application/x-www-form-urlencoded"
  }
}