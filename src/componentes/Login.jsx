import React from 'react'
import appFirebase from '../credenciales'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);



const Login = () => {


    const[registrando, setRegistrando] = React.useState(false)

    const funcAutenticar = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;
        
        if  (registrando) {
            try{
                await createUserWithEmailAndPassword(auth, correo, password);
            }
        catch (error){
            console.error("Asegurate que la contraseña tenga al menos 8 caracteres y el correo sea valido")
        }

        }
        else{
            try{
                await signInWithEmailAndPassword (auth, correo, password);
            }
            catch (error){
                console.error("Error al iniciar sesion. Asegurate que la clave sea valida")
            }
        }



    }

     return (
  <div className="container login-container">
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4">
        <div className="login-card card shadow-lg">
          <h2 className="login-titulo">{registrando ? "Registro" : "Iniciar Sesión"}</h2>
          <form onSubmit={funcAutenticar}>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              className="login-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="login-input"
            />
            <button type="submit" className="login-btn">
              {registrando ? "Registrarte" : "Iniciar Sesión"}
            </button>
          </form>
          <h4 className="login-texto">
            {registrando ? "Ya tienes una cuenta?" : "¿Aún no tienes una cuenta?"}{" "}
            <button
              className="btn-switch"
              onClick={() => setRegistrando(!registrando)}
            >
              {registrando ? "Iniciar Sesión" : "Registrarte"}
            </button>
          </h4>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login
