(function () {
    angular.module('AppTeste', []).controller('pedidoController', function ($scope, $http, $filter) {

        $http.get("Api/Pedido").success(function (response) {
            $scope.pedido = response;
        });

        $scope.salvar = function () {
            $scope.pedido.DataPedido = convertPtBrDateToISODate($('#dataPedido').val());

            $http.post('Api/Pedido', $scope.pedido).success(function (data, status, headers, config) {
                alert("success");
            });
        }
    });
}());