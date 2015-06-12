app.directive('feedsterPost', function() {
  return {
    strict: 'E',
    scope: {
      post: '='
    },
    templateUrl: 'js/directives/feedsterPost.html'
  }
});