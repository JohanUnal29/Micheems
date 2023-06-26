
// creacion de animal
export class Animal {
    constructor(id, nombre, raza, vacunas, caracter, categoria, ciudad, condicionesEspeciales, edad, enfermedad, genero, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.vacunas = vacunas;
        this.caracter = caracter;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.condicionesEspeciales = condicionesEspeciales;
        this.edad = edad;
        this.enfermedad = enfermedad;
        this.genero = genero;
        this.imagen = imagen;

    }

    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    getRaza() {
        return this.raza;
    }

    getEdad() {
        return this.edad;
    }

    getGenero() {
        return this.genero;
    }

    getTipo() {
        return this.categoria;
    }

    getCiudad() {
        return this.ciudad;
    }

    getVacunas() {
        return this.vacunas;
    }

    getCaracter() {
        return this.caracter;
    }

    getCategoria() {
        return this.categoria;
    }

    getCondicionesEspeciales() {
        return this.condicionesEspeciales;
    }

    getEnfermedad() {
        return this.enfermedad;
    }

    getImagen() {
        return this.imagen;
    }

    // ...

    toString() {
        return `[id=${this.id}, nombre=${this.nombre}, raza=${this.raza}, vacunas=${this.vacunas}, caracter=${this.caracter}, categoria=${this.categoria}, ciudad=${this.ciudad}, condicionesEspeciales=${this.condicionesEspeciales}, edad=${this.edad}, enfermedad=${this.enfermedad}, genero=${this.genero}, imagen=${this.imagen}]`;
    }
}
// tabla hash 
export class HashTabla {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.tabla = new Array(capacidad);
        this.tamano = 0;
        this.factorCarga = 0.0;
    }

    funcionHash(id) {
        return id % this.capacidad;
    }

    funcionRehash(intento, id) {
        return (intento + this.funcionHash(id)) % this.capacidad;
    }

    rehash() {
        let nuevaCapacidad = this.capacidad * 2;
        let nuevaTabla = new Array(nuevaCapacidad);

        // Reinsertar todos los elementos en la nueva tabla
        for (let animal of this.tabla) {
            if (animal != null) {
                let indice = this.funcionHash(animal.getId());

                while (nuevaTabla[indice] != null) {
                    indice = this.funcionRehash(indice, animal.getId());
                }

                nuevaTabla[indice] = animal;
            }
        }

        this.tabla = nuevaTabla;
        this.capacidad = nuevaCapacidad;
        this.factorCarga = this.tamano / this.capacidad;
    }
    // busqueda por categoria, raza, genero,edad y ciudad 
    buscar1(categoria, raza, genero, edad, ciudad) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getTipo() === categoria && animal.getRaza() === raza && animal.getGenero() === genero && animal.getEdad() === edad && animal.getCiudad() === ciudad) {
                resultados.push(animal);
            }
        }
        return resultados;
    }
    // misma busqueda pero por rangos de edad busqueda por categoria, raza, genero,edad y ciudad 
    buscar2(categoria, raza, genero, ini, end, ciudad) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getTipo() === categoria && animal.getRaza() === raza && animal.getGenero() === genero && animal.getEdad() >= ini && animal.getEdad() <= end && animal.getCiudad() === ciudad) {
                resultados.push(animal);
            }
        }
        return resultados;
    }

    // busqueda por categoria, raza, genero, edad
    buscar3(categoria, raza, genero, edad) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getTipo() === categoria && animal.getRaza() === raza && animal.getGenero() === genero && animal.getEdad() === edad) {
                resultados.push(animal);
            }
        }
        return resultados;
    }
    // busqueda por categoria, raza, genero, rango edad
    buscar4(categoria, raza, genero, ini, end) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getTipo() === categoria && animal.getRaza() === raza && animal.getGenero() === genero && animal.getEdad() >= ini && animal.getEdad() <= end) {
                resultados.push(animal);
            }
        }
        return resultados;
    }

    buscar5(categoria, raza, genero) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getTipo() === categoria && animal.getRaza() === raza && animal.getGenero() === genero) {
                resultados.push(animal);
            }
        }
        return resultados;
    }

    buscar6(categoria, genero) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getTipo() === categoria && animal.getGenero() === genero) {
                resultados.push(animal);
            }
        }
        return resultados;
    }

    buscar7(categoria) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getTipo() === categoria) {
                resultados.push(animal);
            }
        }
        return resultados;
    }

    buscar8(inicio, fin) {
        let resultados = [];
        for (let animal of this.tabla) {
            if (animal != null && animal.getEdad() >= inicio && animal.getEdad() <= fin) {
                resultados.push(animal);
            }
        }
        return resultados;
    }

    insertar(animal) {
        if (this.factorCarga >= 0.5) {
            this.rehash();
        }

        let id = animal.getId();
        let indice = this.funcionHash(id);
        let intento = 0;

        while (this.tabla[indice] != null) {
            indice = this.funcionRehash(intento, id);
            intento++;
        }

        this.tabla[indice] = animal;
        this.tamano++;
        this.factorCarga = this.tamano / this.capacidad;
    }

    buscar(id) {
        let indice = this.funcionHash(id);
        let intento = 0;

        while (this.tabla[indice] != null) {
            if (this.tabla[indice].getId() === id) {
                return this.tabla[indice];
            }
            intento++;
            indice = this.funcionRehash(intento, id);
        }

        return null;
    }

    mostrarTabla() {
        const elementos = [];
        for (let i = 0; i < this.capacidad; i++) {
          if (this.tabla[i] != null) {
            elementos.push(this.tabla[i]);
          }
        }
        return elementos;
      }
      
}
