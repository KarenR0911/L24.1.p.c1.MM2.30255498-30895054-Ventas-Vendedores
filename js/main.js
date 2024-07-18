/*Se conoce el nombre, tipo de vendedor (1=Mayorista, 2=Minorista) y monto de ventas de 
varios vendedores. Se desea determinar Monto total de la ventas de los vendedores Mayoristas 
y mayor venta realizada por los vendedores tipo mayorista. 
Se dispone de los siguientes datos de varias vendedores: (nombre, tipo de vendedor, monto 
venta) (Mary, 1, 150), (José, 1, 135), (Carlos, 2, 160), (Pedro, 2,  75)  */
import Vendedor from "./Vendedor.js";
import TodoVendedor from "./TodoVendedor.js";

let ven1 = new Vendedor("Mary", 1, 150);
let ven2 = new Vendedor("José", 1, 135);
let ven3 = new Vendedor("Carlos", 2, 160);
let ven4 = new Vendedor("Pedro", 2, 75);

let todovendedor = new TodoVendedor();

todovendedor.procesarVendedor(ven1);
todovendedor.procesarVendedor(ven2);
todovendedor.procesarVendedor(ven3);
todovendedor.procesarVendedor(ven4);

let salida = document.getElementById("Salida");
salida.innerHTML = `A continuación se mostrarán los resultados: <br><br>`;
salida.innerHTML += `Monto total de las ventas de los vendedores mayoristas: $${todovendedor.devolverMontoMayorista()}`;
salida.innerHTML += `<br>Mayor venta realizada por los vendedores mayoristas: $${todovendedor.devolverMayorVenta()}`;
