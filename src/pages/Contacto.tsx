import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacto = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-corporate-primary via-corporate-secondary to-corporate-tertiary">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Nuestro equipo de ingeniería está listo para brindarte una solución a medida
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Inicia tu Próximo Proyecto con Nosotros
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Corporativo *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(51) 9XX-XXX-XXX"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-corporate-primary hover:bg-corporate-secondary text-white font-semibold"
                >
                  Enviar Consulta
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h2>
                <p className="text-muted-foreground mb-8">
                  Estamos disponibles para atender tus consultas y brindarte asesoría especializada 
                  en soluciones de infraestructura tecnológica.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-corporate">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">(51) 9XX-XXX-XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-corporate">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contacto@ingenieria.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-corporate">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Lima, Perú<br />
                      Atendemos proyectos a nivel nacional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-corporate">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horario de Atención</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">¿Necesitas Soporte Urgente?</h3>
                <p className="text-muted-foreground mb-4">
                  Para emergencias técnicas o soporte 24/7 en proyectos activos, 
                  contamos con líneas de atención prioritaria.
                </p>
                <Button variant="outline" className="w-full">
                  Contactar Soporte
                </Button>
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

export default Contacto;
