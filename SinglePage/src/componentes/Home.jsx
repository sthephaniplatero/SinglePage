import React, { useState } from 'react';
import Card from './Card';
import FormCita from './FormCita';
import { nutricionistaCollection } from './Controller.jsx';
import { onSnapshot } from 'firebase/firestore';

const Home = ({ correoUsuario }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nutricionistas, setNutricionistas] = useState([]);

  // Traer los nutricionistas de Firebase
  React.useEffect(() => {
    const unsubscribe = onSnapshot(nutricionistaCollection, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNutricionistas(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container my-4">
      <div className="bienvenida-container mb-3">
        <h2 className="bienvenida-titulo">Bienvenido Usuario {correoUsuario}</h2>
        <button 
          className="btn btn-primary mt-2"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? "Cerrar Formulario" : "Agendar Cita"}
        </button>
      </div>

      
      {mostrarFormulario && <FormCita correoUsuario={correoUsuario} nutricionistas={nutricionistas} />}

      
      <Card nutricionistas={nutricionistas} />
    </div>
  );
};

export default Home;
