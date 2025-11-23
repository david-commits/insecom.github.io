import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Network, Server, ShieldCheck, Flame } from "lucide-react";

const ProductosServicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Productos y Servicios
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Soluciones integrales de infraestructura tecnológica para corporaciones, gobierno y construcción
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Servicios Clave
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Diseñamos, implementamos y mantenemos infraestructura crítica para el futuro de su organización
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              icon={Network}
              title="Cableado Estructurado y Redes"
              description="Certificación de redes de fibra óptica y cobre de Categoría 6A y superior. Implementación de infraestructura de red escalable y de alto rendimiento."
            />
            <ServiceCard
              icon={Server}
              title="Data Centers Modulares"
              description="Diseño y construcción de salas de servidores de alta disponibilidad y eficiencia. Soluciones redundantes con sistemas de climatización y energía."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Seguridad Electrónica"
              description="Sistemas de videovigilancia IP y control de acceso de última generación. Integración con plataformas de gestión centralizadas."
            />
            <ServiceCard
              icon={Flame}
              title="Detección y Supresión de Incendio"
              description="Sistemas certificados para proteger activos críticos. Detección temprana y supresión automática conforme a normativas internacionales."
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Soluciones Detalladas
          </h2>
          
          <div className="space-y-12">
            {/* Service 1 */}
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-corporate">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Cableado Estructurado y Redes
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Implementamos infraestructuras de cableado estructurado siguiendo estándares internacionales 
                    (TIA/EIA, ISO/IEC), garantizando la máxima performance y escalabilidad.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Certificación de enlaces Cat 6A, Cat 7 y fibra óptica
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Diseño y documentación completa de infraestructura
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Garantía extendida de 25 años en sistemas certificados
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-corporate">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Data Centers Modulares
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Diseñamos y construimos salas de servidores con los más altos estándares de disponibilidad, 
                    seguridad y eficiencia energética (Tier II, Tier III).
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Sistemas de climatización de precisión redundantes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      UPS y grupos electrógenos para alimentación ininterrumpida
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Sistemas de monitoreo y gestión ambiental 24/7
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-corporate">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Seguridad Electrónica
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Implementamos sistemas de seguridad electrónica de última generación con tecnología IP, 
                    analítica de video e inteligencia artificial.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Videovigilancia IP con analítica inteligente
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Control de acceso biométrico y por tarjeta
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Integración con sistemas de alarma y detección de intrusos
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-corporate">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Detección y Supresión de Incendio
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Sistemas de detección temprana y supresión automática de incendios diseñados para 
                    proteger activos críticos conforme a NFPA y normativas locales.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Detección por aspiración de humo de alta sensibilidad
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Supresión con agentes limpios (FM-200, Novec 1230)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-corporate-primary"></span>
                      Certificación y mantenimiento según normativas vigentes
                    </li>
                  </ul>
                </div>
              </div>
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

export default ProductosServicios;
