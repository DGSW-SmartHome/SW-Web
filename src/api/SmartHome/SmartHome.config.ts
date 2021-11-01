const GetUserToken: string | null = sessionStorage.getItem('token');

export const SmartHomeURL: string = 'http://15.165.77.151:8000';

export const headers: object = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}

export const UserHeaders: object = {
  headers: {
    "Authorization": `Token ${GetUserToken}`,
    "Content-Type": "application/x-www-form-urlencoded"
  }
}