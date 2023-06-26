import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Navbarr2 from '../sub-components/navbar/Navbarr2';
import "./Adopt.css";
import { HashTabla, Animal } from "./hashTable.js";


const ItemListContainer = () => {
  const hashTabla = new HashTabla(100);

  const [animales, setAnimales] = useState([]);
  const [animales2, setAnimales2] = useState([]);

  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  useEffect(() => {
    const animalesRef = collection(db, "Mascotas");
    const q = categoria ? query(animalesRef, where("categoria", "==", categoria)) : animalesRef;

    getDocs(q)
      .then((resp) => {
        const animalesData = resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        });
        setAnimales(animalesData);     

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

  }, [categoria]);

  useEffect(() => {
    const tablaAnimales = animales.map(animal => ({
      id: animal.id,
      nombre: animal.nombre,
      raza: animal.raza,
      vacunas: animal.vacunas,
      caracter: animal.caracter,
      categoria: animal.categoria,
      ciudad: animal.ciudad,
      condicionesEspeciales: animal.condicionesEspeciales,
      edad: animal.edad,
      enfermedad: animal.enfermedad,
      genero: animal.genero,
      imagen: animal.imagen
    }));
  
    setAnimales2(tablaAnimales);
  }, [animales]);
  
  console.log("animales2", animales2);

  return (
    <div className="adopt">
      <Navbarr2></Navbarr2>
      <ItemList animales={animales2} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer;
