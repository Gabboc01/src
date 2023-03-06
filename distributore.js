class VendorMachine {
    #_products;
    #_display;

    get products (){
        return this.#_products;
    }
    get display(){
        return this.#_display;
    }
    constructor(products){
        this.#_products = products;
        this.#_display = "Seleziona il prodotto";
    };
    
    }
    
    
    class Prodotti{
    constructor(name, brand, codice, prezzo){
        this.name = name;
        this.brand = brand;
        this.codice = codice
        this.prezzo = prezzo
    }
}
const productsBox = [
    new Prodotti("biscotti", "Ringo", 1, 2),
    new Prodotti("patatine", "Lays", 2, 1.50),
    new Prodotti("bibite", "acqua", 3, 0.50)
]
const products = [];
for (let outeridx = 0; outeridx < 3; outeridx ++){
    if(products[outeridx] === undefined){
        products[outeridx] = [];
    }
    for(let inneridx = 0; inneridx <5; inneridx++){
        products[outeridx].push(productsBox[outeridx]);
    }
}

const vMachine = new VendorMachine(products);
console.debug(vMachine.products);