const Auto = (marca, modelo, precio, km, color, cuotas, año, patente, vendido) => {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.km = km;
    this.color = color;
    this.coutas = cuotas;
    this.año = año;
    this.patente = patente;
    this.vendido = vendido;
}

const nuevoAuto = new Auto("Renault", "Kangoo", 300000, 150000,"gris",24,2014,"OBO378",false);
console.log(nuevoAuto);