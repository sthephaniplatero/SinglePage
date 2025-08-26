import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { nutricionistaCollection } from "./Controller.jsx";

function Card() {
  const [nutricionistas, setNutricionistas] = useState([]);

  useEffect(() => {
    
    const unsubscribe = onSnapshot(nutricionistaCollection, (snapshot) => {
      const nutricionistasData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNutricionistas(nutricionistasData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="titulo-nutricionistas text-center mb-4">Nuestros Nutricionistas</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {nutricionistas.map((nutricionista) => (
          <div className="col" key={nutricionista.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={nutricionista.avatar}
                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                className="card-img-top"
                alt={nutricionista.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {nutricionista.name} {nutricionista.lastName}
                </h5>
                <p className="card-text text-muted">{nutricionista.speciallity}</p>
                {nutricionista.instagram && (
                  <p className="card-text">
                    <a
                      href={nutricionista.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none"
                    >
                      {nutricionista.instagram}
                    </a>
                  </p>
                )}
              </div>
              <div className="card-footer bg-light">
                <small className="text-muted">
                  Precio: ${nutricionista.requestPrice}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
