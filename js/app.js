var app = angular.module('chatroom', []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});

// httpProvider native angular provider that only works in config. 
// only takes providers
