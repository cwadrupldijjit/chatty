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
                
                return $http({
                    method: 'POST',
                    url: 'http://localhost:5546',
                    data: {
                        message: message,
                        username: username
                    }
                });
            }
        }
    });
