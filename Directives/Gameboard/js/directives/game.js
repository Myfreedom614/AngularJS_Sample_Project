app.directive('game', function() {
  return {
    strict: 'E',
    scope: {
      info: "="
    },
    templateUrl: 'js/directives/game.html'
    //template: '<br>{{ info.period }}<br>',
  }
});