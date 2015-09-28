'use strict';

angular.module('chattyApp')
    .controller('MessageController', function (MessageService, $timeout) {
        var vm = this;
        
        vm.messages = [];
        
        function pullData() {
            MessageService.getMessages()
                .then(function(response) {
                    vm.messages = response.data;
                });
        }
        
        vm.getMessages = function() {
            pullData();
        }();
        
        vm.postMessage = function() {
            // console.log('test');
            MessageService.postMessage(vm.newMessage, vm.username)
                .then(function() {
                    console.log(vm.getMessages());
                });
            
            $timeout(function() {
                pullData();
            }, 100);
        };
    });
