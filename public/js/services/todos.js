angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/app/models/todo');
			},
			create : function(todoData) {
				return $http.post('/app/models/todo', todoData);
			},
			delete : function(id) {
				return $http.delete('/app/models/todo/' + id);
			}
		}
	}]);