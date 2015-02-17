(function () {
    angular.module('AppTeste', []).controller('pedidoController', function ($scope, $http) {

        $http.get("Api/Pedido").success(function (response) {
            $scope.pedido = response;

            $scope.pedido.Data = $filter('date')($scope.pedido.Data, 'yyyy-MM-dd');
        });

        $scope.Salvar = function () {
            var data = $scope.pedido;

            $http.post('Api/Pedido', data).success(function (data, status, headers, config) {

            });
        }

    });
}());