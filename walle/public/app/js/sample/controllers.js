/**
 * Created by weixy on 10/31/13.
 */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope, $http) {

    $http.get('app/json/sample/phones.json').success(function(data) {
       $scope.phones = data;
    });
    /*
    $scope.phones = [
       {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.', 'age': 1},
       {'name': 'Motorola XOOM with Wi-Fi', 'snippet': 'The Next, Next Generation tabler.', 'age': 2},
       {'name': 'MOTOROLA XOOM', 'snippet': 'The Next, Next Generation tablet.', 'age': 3}
    ];*/

    $scope.orderProp = 'age';
});