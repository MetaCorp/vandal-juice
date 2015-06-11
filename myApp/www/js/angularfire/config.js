angular.module('firebase.config', [])
  .constant('FBURL', 'https://vandal-juice.firebaseio.com/')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
