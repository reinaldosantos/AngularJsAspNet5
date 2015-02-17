using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularJsAspNet5.Controllers.Controllers
{
    public class Pedido
    {
        public DateTime Data { get; set; }
        public List<ItemPedido> Itens { get; set; }
    }

    public class ItemPedido
    {
        public string Nome { get; set; }
        public decimal Preco { get; set; }
    }

    [Route("api/[controller]")]
    public class PedidoController : Controller
    {
        [HttpGet]
        public object Get()
        {
            Pedido pedido = new Pedido();

            List<ItemPedido> lista = new List<ItemPedido>();

            lista.Add(new ItemPedido() { Nome = "Item 1", Preco = 10.5m });
            lista.Add(new ItemPedido() { Nome = "Item 2", Preco = 30 });

            pedido.Itens = lista;
            pedido.Data = DateTime.Now.Date;

            return pedido;
        }

        [HttpPost]
        public void Post([FromBody] Pedido pedido)
        {
            var teste = pedido;
        }
    }
}
