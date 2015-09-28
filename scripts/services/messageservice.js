'use strict';

angular.module('chattyApp')
    .factory('MessageService', function MessageService($http) {
        return {
            getMessages: function() {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:5546'
                });
            },
            
            postMessage: function(message, username) {
                return $http.post('http://localhost:5546', {
                        message: message,
                        username: username
                    }
                );
            }
        }
    });
