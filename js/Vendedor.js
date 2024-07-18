export default class Vendedor {
  constructor(nom, t, mV) {
    this.nombre = nom;
    this.tipo = t;
    this.montoVenta = mV;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set tipo(t) {
    this._tipo = t;
  }
  set montoVenta(mV) {
    this._montoVenta = mV;
  }
  get nombre() {
    return this._nombre;
  }
  get tipo() {
    return this._tipo;
  }
  get montoVenta() {
    return this._montoVenta;
  }
}
