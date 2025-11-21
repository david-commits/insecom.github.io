import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { ValueCard } from "@/components/ValueCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { 
  Cable, 
  Server, 
  Shield, 
  Flame,
  Award,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";
import projectDataCenter from "@/assets/project-datacenter.jpg";
import projectNetwork from "@/assets/project-network.jpg";
import projectSecurity from "@/assets/project-security.jpg";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Soluciones de Ingeniería y Comunicaciones de Alto Rendimiento
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Expertise en Cableado Estructurado, Data Centers y Seguridad Electrónica para proyectos corporativos y gubernamentales.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Hablemos de tu Proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios Clave
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Diseñamos, implementamos y mantenemos infraestructura crítica para el futuro de su organización.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Cable}
              title="Cableado Estructurado y Redes"
              description="Certificación de redes de fibra óptica y cobre de Categoría 6A y superior."
            />
            <ServiceCard
              icon={Server}
              title="Data Centers Modulares"
              description="Diseño y construcción de salas de servidores de alta disponibilidad y eficiencia."
            />
            <ServiceCard
              icon={Shield}
              title="Seguridad Electrónica"
              description="Sistemas de videovigilancia IP y control de acceso de última generación."
            />
            <ServiceCard
              icon={Flame}
              title="Detección y Supresión de Incendio"
              description="Sistemas certificados para proteger activos críticos."
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="nosotros" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Confianza y Certificación en Cada Proyecto
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <ValueCard
              icon={Users}
              title="Experiencia Comprobada"
              description="Más de 15 años ejecutando proyectos de infraestructura B2B complejos."
            />
            <ValueCard
              icon={Award}
              title="Certificaciones de Marca"
              description="Técnicos certificados en las principales marcas del sector."
            />
            <ValueCard
              icon={CheckCircle2}
              title="Enfoque en Calidad"
              description="Garantía total en la instalación y puesta en marcha de sistemas."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestro Compromiso, Proyectos Reales
            </h2>
            <p className="text-xl text-muted-foreground">
              Mira cómo nuestras soluciones transforman la infraestructura de nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PortfolioCard
              image={projectDataCenter}
              title="Data Center para Municipalidad X"
              year="2024"
            />
            <PortfolioCard
              image={projectNetwork}
              title="Red de Fibra Óptica para Corporación Y"
              year="2023"
            />
            <PortfolioCard
              image={projectSecurity}
              title="Sistema CCTV Industrial para Constructora Z"
              year="2022"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trabajamos con Líderes
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="w-40 h-20 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground font-semibold hover:border-tertiary transition-colors"
              >
                Cliente {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary via-secondary to-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inicia tu Próximo Proyecto con Nosotros
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Nuestro equipo de ingeniería está listo para brindarte una solución a medida.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-white/10 rounded-full">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Teléfono</p>
                  <p className="text-white/80">(51) 9XX-XXX-XXX</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-white/10 rounded-full">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-white/80">contacto@ingenieria.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-white/10 rounded-full">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Ubicación</p>
                  <p className="text-white/80">Lima, Perú</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
            >
              Solicitar Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2024 Ingeniería y Comunicaciones. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
