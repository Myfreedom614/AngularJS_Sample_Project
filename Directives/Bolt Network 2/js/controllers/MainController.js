app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [
    {
    series: "Sherlock",
      series_img: "img/sherlock.jpg",
      genre: "Crime drama",
      season: 3,
      episode: "The Empty Hearse",
      description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
      datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
    },
    {
      series: "Arrested Development",
      series_img: "img/arrested_development.jpg",
      genre: "Comedy",
      season: 4,
      episode: "Off the Hook",
      description: "Buster struggles to make it on his own and break away from his overbearing mother.",
      datetime: new Date(2013, 05, 26, 21, 00, 00, 00)
    }
 ];
}]);