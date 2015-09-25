'use strict';

angular.module('chattyApp')
    .controller('MessageController', function (MessageService) {
        var vm = this;
        
        vm.messages = [];
        
        vm.getMessages = function() {
            console.log(MessageService.getMessages());
            // console.log(vm.messages);
            
            vm.messages = MessageService.getMessages()
                .then(function(response) {
                    vm.messages = response;
                });
        }();
        
        vm.postMessage = function() {
            MessageService.postMessage(vm.newMessage, vm.username);
        };
    });
