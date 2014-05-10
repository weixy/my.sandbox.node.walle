/**
 * Created by weixy on 9/05/14.
 */
var module = angular.module('TmptApp', ['ui.bootstrap'])
    .controller('TmpCtrl', ['$scope', 'Tmpt', function (scope, Tmpt){
        scope.$on('temperature.update', function(event) {
            scope.temp = Tmpt;
            scope.$apply();
        });
        scope.temp = Tmpt;
    }])
    .factory('Tmpt', ['$rootScope', function($rootScope){
        var temp = {
            initTemp: 0x00C8FF,
            temperature: {'degree': 20, 'bkcolor': '#00C8FF'},
            increaseTemp: function () {
                temp.temperature.degree += 1;
                temp.temperature.bkcolor = "#" + temp.calculateColor(temp);
                $rootScope.$broadcast('temperature.update');
            },
            decreaseTemp: function () {
                temp.temperature.degree -= 1;
                temp.temperature.bkcolor = "#" + temp.calculateColor(temp);
                $rootScope.$broadcast('temperature.update');
            },
            calculateColor: function(temp) {
                var bk = temp.initTemp;
                var de = temp.temperature.degree - 20;
                console.log(de);
                if (de > 0) {
                    switch(de) {
                        case 1:
                            bk = 0x00DFFF;
                            break;
                        case 2:
                            bk = 0x00E5FF;
                            break;
                        case 3:
                            bk = 0x00FFFF;
                            break;
                        case 4:
                            bk = 0x00FF8F;
                            break;
                        case 5:
                            bk = 0x00FF00;
                            break;
                        case 10:
                            bk = 0xFFFF00;
                            break;
                        default :
                            if (10 > de && de > 5) {
                                bk = 0x00FF00 + 0xFF0000 * (de - 5) / 5;
                            } else {
                                bk = 0xFFFF00 - (0x000f00 * (de - 10)); ///
                                bk = (bk >= 0xFF0000) ? bk : 0xFF0000;
                            }
                            break;
                    }
                } else if (de < 0) {
                    if (de > -21) {
                        bk = bk + de * 0x000A00;
                    } else if (de <= -21) {
                        bk = 0x0000FF + ((de + 20) * 0x000005);
                    }
                    if (bk < 0) {
                        bk = 0;
                    }
                } else {
                    bk = temp.initTemp;
                }
                var hex = (bk).toString(16);
                var zero = "000000";
                var tmp = 6-hex.length;

                return zero.substr(0, tmp) + hex;
            }
        };
        return temp;
}]);

module.directive('increaseTemp', ['Tmpt', function(Tmpt){
    return {
        link:function(scope, element, attrs) {
            element.bind("click", function() {
                Tmpt.increaseTemp();
                console.log("XXXXXXXX");
            });
        }
    }
}]);

module.directive('decreaseTemp', ['Tmpt', function(Tmpt){
    return {
        link:function(scope, element, attrs) {
            element.bind("click", function() {
                Tmpt.decreaseTemp();
                console.log("YYYYYYYY");
            });
        }
    }
}]);

var ButtonsCtrl = function($scope) {
    $scope.singleModel = 1;
};

var MyTabs = function($scope) {

};