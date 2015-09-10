(function() {
	'use strict';
	
	angular.module('statusApp')
	.controller('AuthController', AuthController, function(Auth, $state) {
		var vm = this;
		
		vm.createUser = createUser;
		vm.login = login;
		
		function createUser() {
			Auth.$unauth();
			
			Auth.$createUser({
				email: vm.email,
				password: vm.password
			}).then(function(userData) {
				login();
			}).catch(function(error) {
				vm.error = error;
			});
		}
		
		function saveUser() {
			
		}
		
		function login() {
			Auth.$authWithPassword({
				email: vm.email,
				password: vm.password
			}).then(function(data) {
				vm.email = null;
				vm.password = null;
				$state.go('status');
			}).catch(function(error) {
				console.log(error);
			});
		}
	});
})();
