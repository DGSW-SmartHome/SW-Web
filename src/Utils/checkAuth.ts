const checkAuth = () => !!sessionStorage.getItem('accessToken');

export default checkAuth;