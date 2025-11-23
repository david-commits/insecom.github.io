import { Navbar } from "@/components/Navbar";
import { ValueCard } from "@/components/ValueCard";
import { Shield, Award, Target, Users, Lightbulb, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-tertiary/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
          {/* Tech grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white/70 hover:text-white">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50">
                <ChevronRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-semibold">Nosotros</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-white/90 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Somos un equipo de ingenieros especializados en soluciones de infraestructura tecnológica crítica, 
            con más de 15 años de experiencia en el sector B2B.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Proporcionar soluciones de ingeniería y comunicaciones de clase mundial que impulsen 
                el crecimiento y la eficiencia operativa de nuestros clientes, manteniendo los más 
                altos estándares de calidad y seguridad.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ser reconocidos como el socio estratégico líder en infraestructura tecnológica crítica 
                en la región, destacando por nuestra innovación, confiabilidad y compromiso con la 
                excelencia técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Nuestros Valores
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Los principios que guían cada proyecto y relación con nuestros clientes
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              title="Integridad"
              description="Actuamos con transparencia y ética en cada proyecto, cumpliendo nuestros compromisos con honestidad."
            />
            <ValueCard
              icon={Award}
              title="Excelencia"
              description="Buscamos la perfección en cada detalle, manteniendo los más altos estándares de calidad técnica."
            />
            <ValueCard
              icon={Target}
              title="Enfoque en Resultados"
              description="Nos orientamos a entregar soluciones efectivas que superen las expectativas de nuestros clientes."
            />
            <ValueCard
              icon={Users}
              title="Trabajo en Equipo"
              description="Colaboramos estrechamente con nuestros clientes y partners para lograr objetivos comunes."
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovación"
              description="Adoptamos las últimas tecnologías y metodologías para ofrecer soluciones vanguardistas."
            />
            <ValueCard
              icon={TrendingUp}
              title="Mejora Continua"
              description="Aprendemos de cada proyecto para perfeccionar nuestros procesos y servicios constantemente."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Profesionales certificados y altamente capacitados en las principales tecnologías del sector
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-tertiary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Ingenieros Especializados</h3>
              <p className="text-muted-foreground">
                Certificados en las principales marcas y tecnologías del mercado
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Gestión de Proyectos</h3>
              <p className="text-muted-foreground">
                Experiencia en proyectos complejos con metodologías ágiles
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-tertiary via-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Soporte Técnico</h3>
              <p className="text-muted-foreground">
                Equipo dedicado para mantenimiento y soporte post-implementación
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-corporate-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Ingeniería & Comunicaciones. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Nosotros;
