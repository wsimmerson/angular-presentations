var angular = require('angular');
var slideController = require('./slide-controller');

angular.module("presentationApp", [])
  .controller('slideCtrl', slideController);
