// slide-controller.js

module.exports = function($scope) {
  $scope.slides = [
    '/slides/slide1.html',
    '/slides/slide2.html',
    '/slides/slide3.html',
  ];

  $scope.current = 0;

  $scope.nextSlide = function () {
    $scope.current++;
    if ($scope.current >= $scope.slides.length) {
      $scope.current = 0;
    }
  };

  $scope.prevSlide = function () {
    $scope.current--;
    if ($scope.current < 0) {
      $scope.current = $scope.slides.length -1;
    }
  };

  $scope.getSlide = function () {
    return $scope.slides[$scope.current];
  };

  $scope.setSlideIndex = function(index) {
    $scope.current = index;
  };

  $scope.getClass = function(index) {
    return $scope.current == index ? "btn-primary" : "btn-default";
  };

  $scope.key = function($event) {
    console.log($event.keyCode);
    if ($event.keyCode == 39) {
      $scope.nextSlide();
    }
    else if ($event.keyCode == 37) {
      $scope.prevSlide();
    }
  };



};
