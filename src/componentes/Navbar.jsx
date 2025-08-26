function Navbar({ auth }) {
  return (
    <nav className="navbar bg-body-tertiary px-3 shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo textual en tonos naranjas */}
        <a className="navbar-brand d-flex align-items-center logo-text" href="#">
          <span className="logo-construyendo">Construyendo</span>{" "}
          <span className="logo-habitos">Hábitos</span>
        </a>
         
         <button className="btn btn-logout ms-auto"onClick={() => auth.signOut()}>Cerrar Sesión</button>
        
        
      </div>
    </nav>
  );
}

export default Navbar;
