import { useState } from "react";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import appFirebase from "../credenciales";

const db = getFirestore(appFirebase);

function FormCita({ nutricionistas }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [medico, setMedico] = useState("");
  const [fecha, setFecha] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "citas"), {
        nombrePaciente: nombre,
        correoPaciente: correo,
        medicoNombre: medico,
        fecha: Timestamp.fromDate(new Date(fecha)),
        comentarios: comentarios,
      });
      setMensaje("Cita agendada correctamente ✅");
     
      setNombre("");
      setCorreo("");
      setMedico("");
      setFecha("");
      setComentarios("");
    } catch (error) {
      console.error("Error agregando cita: ", error);
      setMensaje("Error al agendar cita ❌");
    }
  };

  return (
    <div className="container my-4">
      <h3 className="text-center mb-3">Agendar cita</h3>
      {mensaje && <div className="alert alert-info">{mensaje}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Selecciona nutricionista</label>
          <select className="form-select" value={medico} onChange={(e) => setMedico(e.target.value)} required>
            <option value="">-- Selecciona --</option>
            {nutricionistas.map((n) => (
              <option key={n.id} value={n.name + " " + n.lastName}>
                {n.name} {n.lastName} - {n.speciallity}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha y hora</label>
          <input type="datetime-local" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label"> ¿Tienes alguna condición de salud relevante? </label>
          <textarea className="form-control" value={comentarios} onChange={(e) => setComentarios(e.target.value)} rows="3" />
        </div>

        <button type="submit" className="btn btn-primary">Agendar cita</button>
      </form>
    </div>
  );
}

export default FormCita;
