(function () {
    angular.module('AppTeste', []).controller('pedidoController', function ($scope, $http, $filter) {

        $http.get("Api/Pedido").success(function (response) {
            $scope.pedido = response;
            $scope.DataPedidoFormatada = $filter('date')(response.DataPedido, "dd/MM/yyyy");
        });

        $scope.Salvar = function () {
            $scope.pedido.DataPedido = convertPtBrDateToISODate($scope.DataPedidoFormatada);

            $http.post('Api/Pedido', $scope.pedido).success(function (data, status, headers, config) {
                alert("success");
            });
        }
    });
}());