import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Localização
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Venha nos visitar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos localizados no coração do bairro, com fácil acesso 
            e estacionamento gratuito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-elevated h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-46.740413!3d-5.575557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzQnMzIuMCJTIDQ2wrA0NCcyNS41Ilc!5e0!3m2!1spt-BR!2sbr!4v1704000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Mercadinho São José"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Rua MA-122, Nº 378<br />
                    Bairro Vila Madeira
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Segunda a Sábado:</span> 7h às 21h</p>
                    <p><span className="font-medium text-foreground">Domingos e Feriados:</span> 8h às 14h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Contato
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Telefone:</span> (11) 98765-4321</p>
                    <p><span className="font-medium text-foreground">WhatsApp:</span> (11) 98765-4321</p>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full font-semibold">
              <Navigation className="w-5 h-5 mr-2" />
              Abrir no Google Maps
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
