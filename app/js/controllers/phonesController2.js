var myApp=angular.module('myApp');
myApp.controller('phoneController', function($scope) {

	$scope.phones = [{
		name: 'Nokia',
		price: 500,
		models:[{
				name: "Nokia Lumia 530",
				price: 150
			},{
				name: "Nokia X2",
				price: 220
			}]
		},{
		name: 'Samsung',
		price: 700,
		models:[{
			name: "Samsung Galaxy S5",
			price: 500
		},{
			name: "Samsung Glaxy Alpha",
			price: 400
		}]
	}]
});