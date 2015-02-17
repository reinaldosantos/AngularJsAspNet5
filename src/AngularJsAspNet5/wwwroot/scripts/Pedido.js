(function () {
    angular.module('AppTeste', []).controller('pedidoController', function ($scope, $http) {

        $http.get("Api/Pedido").success(function (response) {
            $scope.pedido = response;
        });

        $scope.Salvar = function () {
            $http.post('Api/Pedido', $scope.pedido).success(function (data, status, headers, config) {
                alert(status);
            });
        }
    });
}());