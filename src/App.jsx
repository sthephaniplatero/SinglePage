import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

   
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {usuario ? (
        <>
          <header>
          <Navbar auth={auth} />
          </header>

          <main>
            <Home correoUsuario={usuario.email} />
          </main>

          <footer>
            <Footer />
          </footer>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
