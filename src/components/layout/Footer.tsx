import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>Protonlab</h4>
        <p>Santiago, Chile</p>
        <p>Teléfono: +56 9 1234 5678</p>
        <p>
          Correo: <a href="mailto:contacto@protonlab.cl">contacto@protonlab.cl</a>
        </p>
      </div>
      <div className="footer__links">
        <Link to={ROUTES.home}>Inicio</Link>
        <Link to={ROUTES.products}>Productos</Link>
        <Link to={ROUTES.support}>Soporte</Link>
        <Link to={ROUTES.contact}>Contacto</Link>
        <Link to={ROUTES.crimePrevention}>Modelo de Prevención de Delitos</Link>
      </div>
      <div className="footer__meta">
        <p>© {new Date().getFullYear()} Protonlab. Hardware avanzado, robótica y soporte técnico.</p>
      </div>
    </footer>
  );
}

export default Footer;
