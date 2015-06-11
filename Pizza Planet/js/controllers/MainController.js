app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Pizza',
      description: 'Pizza.....',
      price: 12
    },
    {
      name: 'Pie',
      description: 'Pie.....',
      price: 4
    },
    {
      name: 'Potato',
      description: 'Potato.....',
      price: 2
    }
  ];

}]);