import { Navbar } from "@/components/Navbar";
import { ValueCard } from "@/components/ValueCard";
import { Shield, Award, Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
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
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-corporate rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Ingenieros Especializados</h3>
              <p className="text-muted-foreground">
                Certificados en las principales marcas y tecnologías del mercado
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-corporate rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Gestión de Proyectos</h3>
              <p className="text-muted-foreground">
                Experiencia en proyectos complejos con metodologías ágiles
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-corporate rounded-full mx-auto mb-4 flex items-center justify-center">
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
