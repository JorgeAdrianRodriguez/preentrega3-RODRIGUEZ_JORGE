class Camiseta {
    constructor(id, equipo, precio, stock, imagen) {
        this.id = id;
        this.equipo = equipo;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.imagen = imagen;
    }
}

const camiseta01 = new Camiseta(1,"Vélez Sarsfield 2023",19500,5,"./assets/img/velez2023.jpg");
const camiseta02 = new Camiseta(2,"Boca Juniors 2023",28000,9, "./assets/img/boca2023.jpg");
const camiseta03 = new Camiseta(3,"River Plate 2023",30200,12, "./assets/img/river2023.jpg");
const camiseta04 = new Camiseta(4,"Independiente 2023",18200,5, "./assets/img/indpte2023.jpg");
const camiseta05 = new Camiseta(5,"Argentina Campeon Qatar 2022",35000,25, "./assets/img/argentina3estrellas.webp");
const camiseta06 = new Camiseta(6,"Francia Qatar 2022",20000,5, "./assets/img/francia2022.webp");
const camiseta07 = new Camiseta(7,"Brasil Qatar 2022",28500,3, "./assets/img/brasil2022.png");
const camiseta08 = new Camiseta(8,"Italia 22/23",17500,3, "./assets/img/italia2022.webp");
const camiseta09 = new Camiseta(9,"RETRO Argentina `86",29000,10, "./assets/img/arg1986.png");
const camiseta10 = new Camiseta(10,"RETRO Argentina `90",21500,6, "./assets/img/arg90.png");
const camiseta11 = new Camiseta(11,"RETRO Argentina `94",24660,3, "./assets/img/arg94.png");
const camiseta12= new Camiseta(12,"RETRO Alemania `90",14660,3, "./assets/img/alemania90.png");

const misCamisetas = [camiseta01, camiseta02, camiseta03, camiseta04, camiseta05, camiseta06, camiseta07, camiseta08, camiseta09, camiseta10, camiseta11, camiseta12];


