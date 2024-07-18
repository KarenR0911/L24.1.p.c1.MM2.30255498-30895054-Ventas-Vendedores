export default class TodoVendedor {
  constructor() {
    this.acumMontoMayorista = 0;
    this.mayorMontoMayorista = 0;
  }
  procesarVendedor(ven) {
    if (ven.tipo == 1) {
      this.acumMontoMayorista += ven.montoVenta;
      if (ven.montoVenta > this.mayorMontoMayorista) {
        this.mayorMontoMayorista = ven.montoVenta;
      }
    }
  }
  devolverMontoMayorista() {
    return this.acumMontoMayorista;
  }
  devolverMayorVenta() {
    return this.mayorMontoMayorista;
  }
}
