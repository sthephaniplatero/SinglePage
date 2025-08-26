function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start mt-4">
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-3 mb-md-0">
            <h6 className="text-uppercase fw-bold">Construyendo Habitos</h6>
            <p>Tu bienestar empieza con pequeños cambios diarios.</p>
          </div>
          <div className="col-lg-6 col-md-12 text-lg-end">
            <a href="#" className="me-3 text-decoration-none text-dark">Inicio</a>
            <a href="#" className="me-3 text-decoration-none text-dark">Servicios</a>
            <a href="#" className="text-decoration-none text-dark">Contacto</a>
          </div>
        </div>
        <div className="text-center mt-3">
          &copy; {new Date().getFullYear()} Construyendo Habitos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;