import { Link } from 'react-router-dom';
import { FiActivity, FiCpu, FiTruck } from 'react-icons/fi';
import ProductCategoryGrid from '../../components/products/ProductCategoryGrid';
import Carousel from '../../components/ui/Carousel';
import { FadeIn } from '../../components/ui/FadeIn';
import { getCategories } from '../../features/catalog/catalogApi';
import { ROUTES } from '../../config/routes';
import carouselLab1 from '../../assets/images/protonlab/ai_hardware_1777123776193.png';
import carouselLab2 from '../../assets/images/protonlab/quantum_processor_1777123790537.png';
import carouselLab3 from '../../assets/images/protonlab/tech_robot_1777091060991.png';
import { useEffect, useState } from 'react';
import type { ProductCategory } from '../../features/catalog/types';

const HERO_CAROUSEL_ITEMS = [
  {
    id: 'equipos-clinicos',
    title: 'Infraestructura de IA',
    description: 'Servidores, aceleradores y plataformas de cómputo para entrenamiento, inferencia y operación crítica.',
    icon: <FiActivity className="carousel-icon" />,
    imageUrl: carouselLab1
  },
  {
    id: 'hematologia',
    title: 'Procesamiento cuántico',
    description: 'Componentes avanzados para simulación, optimización y tareas de alto desempeño.',
    icon: <FiCpu className="carousel-icon" />,
    imageUrl: carouselLab2
  },
  {
    id: 'electrolitos',
    title: 'Robótica aplicada',
    description: 'Integración robótica, automatización industrial y soporte para despliegues de campo.',
    icon: <FiTruck className="carousel-icon" />,
    imageUrl: carouselLab3
  }
];

// Página de inicio con navegación rápida a catálogo y soporte.
function HomePage() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  return (
    <div className="page">
      <FadeIn direction="up">
        <section className="hero">
          <div>
            <p className="badge">Infraestructura avanzada para laboratorios y operaciones tecnológicas</p>
          <h1>Hardware de IA, robótica y sistemas de alto desempeño con soporte especializado.</h1>
          <p>
            Protonlab integra equipamiento avanzado, automatización y continuidad técnica para equipos
            críticos. Combinamos catálogo especializado, instalación y acompañamiento operativo para
            organizaciones que necesitan rendimiento estable y soporte real.
          </p>
          <div className="actions">
            <Link to={ROUTES.products} className="btn btn-primary home-cta-catalog">Ver catálogo</Link>
            <Link to={ROUTES.support} className="btn btn-secondary">Contactar soporte</Link>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero-carousel">
            <Carousel
              items={HERO_CAROUSEL_ITEMS}
              baseWidth={600}
              autoplay={true}
              autoplayDelay={5000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <ProductCategoryGrid categories={categories} />
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="support-block">
          <h2>Soporte integral</h2>
          <p className="support-block__description">
            Acompañamos evaluación, integración y operación diaria con especialistas en hardware,
            automatización y continuidad técnica.
          </p>
        <div className="grid two support-block__options">
          <div className="card support-option-card" role="button" tabIndex={0} aria-label="Soporte de pre venta">
            <h3><span aria-hidden="true">✓</span> Pre venta</h3>
            <p>Evaluación técnica, demos, dimensionamiento y acompañamiento antes de compra.</p>
          </div>
          <div className="card support-option-card" role="button" tabIndex={0} aria-label="Soporte de post venta">
            <h3><span aria-hidden="true">✓</span> Post venta</h3>
            <p>Servicio técnico, mantenimiento programado y planes de continuidad operacional.</p>
          </div>
        </div>
        <Link to={ROUTES.support} className="btn btn-secondary support-block__cta">Ver soporte</Link>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <section className="home-trust-section">
        <h2>Capacidad técnica y despliegue</h2>
        <div className="grid three">
          <div className="card">
            <h3>Ingeniería aplicada</h3>
            <p>Equipos especializados en infraestructura, automatización y operación de plataformas críticas.</p>
          </div>
          <div className="card">
            <h3>Tecnología avanzada</h3>
            <p>Catálogo orientado a hardware de IA, robótica, electrónica especializada y cómputo de alto desempeño.</p>
          </div>
          <div className="card">
            <h3>Alcance</h3>
            <p>Cobertura remota y en terreno para instalación, soporte y continuidad técnica.</p>
          </div>
        </div>
        </section>
      </FadeIn>
    </div>
  );
}

export default HomePage;
