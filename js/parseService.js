// 'https://api.parse.com/1/classes/chat?order=-createdAt'
// 'https://api.parse.com/1/classes/chat'

angular.module('chatroom').service('parseService', function($http){

    this.getData = function() {
      return $http.get('https://api.parse.com/1/classes/chat?order=-createdAt');
    },

    this.postData = function(message) {
      return $http.post('https://api.parse.com/1/classes/chat', {text: message});
    }; 

});