import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Network, Camera, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductosServicios = () => {
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
                <BreadcrumbPage className="text-white font-semibold">Productos y Servicios</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Productos y Servicios
          </h1>
          <p className="text-xl text-white/90 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
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
              icon={Camera}
              title="CCTV (Circuito Cerrado de Televisión)"
              description="Implementación de sistemas de CCTV análogos e IP. Instalación de cámaras Fijas, Minidomo y PTZ (Pan-Tilt-Zoom) con conexión vía fibra óptica. Marcas: AXIS, ACTI, PELCO, AMERICAN DYNAMICS. Software VMS: MILESTONE, GENETEC, INTELLEX DVMS, NICE VISION."
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
          
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="group relative bg-gradient-to-br from-card via-card to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-tertiary/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-tertiary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-tertiary to-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-tertiary transition-colors">
                    Cableado Estructurado y Redes
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Implementamos infraestructuras de cableado estructurado siguiendo estándares internacionales 
                    (TIA/EIA, ISO/IEC), garantizando la máxima performance y escalabilidad.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0"></span>
                      <span>Certificación de enlaces Cat 6A, Cat 7 y fibra óptica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0"></span>
                      <span>Diseño y documentación completa de infraestructura</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0"></span>
                      <span>Garantía extendida de 25 años en sistemas certificados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-gradient-to-br from-card via-card to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-secondary/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-secondary to-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    CCTV (Circuito Cerrado de Televisión)
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Implementación de sistemas de CCTV análogos e IP. Instalación de cámaras Fijas, Minidomo y PTZ 
                    (Pan-Tilt-Zoom) con conexión vía fibra óptica.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                      <span><strong>Marcas/Plataformas Clave:</strong> Cámaras AXIS, ACTI, PELCO, AMERICAN DYNAMICS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                      <span><strong>Software VMS/Grabación:</strong> MILESTONE, GENETEC, INTELLEX DVMS, NICE VISION</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                      <span>Conexión vía fibra óptica para transmisión de video de alta calidad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-gradient-to-br from-card via-card to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-tertiary/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-tertiary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-tertiary via-secondary to-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-tertiary transition-colors">
                    Seguridad Electrónica
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Implementamos sistemas de seguridad electrónica de última generación con tecnología IP, 
                    analítica de video e inteligencia artificial.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0"></span>
                      <span>Videovigilancia IP con analítica inteligente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0"></span>
                      <span>Control de acceso biométrico y por tarjeta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0"></span>
                      <span>Integración con sistemas de alarma y detección de intrusos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-gradient-to-br from-card via-card to-muted/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-secondary/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary via-secondary to-tertiary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Detección y Supresión de Incendio
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Sistemas de detección temprana y supresión automática de incendios diseñados para 
                    proteger activos críticos conforme a NFPA y normativas locales.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Detección por aspiración de humo de alta sensibilidad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Supresión con agentes limpios (FM-200, Novec 1230)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>Certificación y mantenimiento según normativas vigentes</span>
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
