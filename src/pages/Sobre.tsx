import { motion } from "framer-motion";
import { Heart, Award, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import storeExterior from "@/assets/store-exterior.jpg";
import teamImage from "@/assets/team.jpg";

const milestones = [
  { year: "2004", title: "Fundação", description: "O Mercadinho São José abre suas portas com apenas 50m²" },
  { year: "2010", title: "Expansão", description: "Primeira reforma, triplicando o espaço de vendas" },
  { year: "2015", title: "Padaria Artesanal", description: "Inauguração da nossa padaria própria" },
  { year: "2020", title: "Modernização", description: "Implementação de sistemas modernos e delivery" },
  { year: "2024", title: "20 Anos", description: "Celebramos duas décadas servindo a comunidade" },
];

const stats = [
  { value: "20+", label: "Anos de História" },
  { value: "5000+", label: "Famílias Atendidas" },
  { value: "2000+", label: "Produtos Disponíveis" },
  { value: "15", label: "Colaboradores" },
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
                Sobre Nós
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça a história do Mercadinho São José e os valores que 
                guiam nosso trabalho há mais de 20 anos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                  Nossa História
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Uma tradição de família servindo famílias
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O Mercadinho São José nasceu em 2004, fruto do sonho de uma família 
                    que acreditava em oferecer produtos de qualidade com atendimento 
                    personalizado para a comunidade.
                  </p>
                  <p>
                    Começamos com uma pequena loja de 50m² e, ao longo dos anos, 
                    crescemos junto com o bairro. Hoje, contamos com um espaço moderno, 
                    padaria artesanal própria e uma equipe dedicada.
                  </p>
                  <p>
                    Nosso diferencial sempre foi tratar cada cliente como parte da nossa 
                    família. Conhecemos nossos clientes pelo nome, sabemos suas preferências 
                    e nos esforçamos para sempre superar suas expectativas.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={storeExterior}
                  alt="Fachada do Mercadinho São José"
                  className="rounded-2xl shadow-elevated w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-warm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Nossa Jornada
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Marcos da Nossa História
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={teamImage}
                  alt="Equipe do Mercadinho São José"
                  className="rounded-2xl shadow-elevated w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                  Nossa Equipe
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Pessoas que fazem a diferença
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossa equipe é formada por profissionais dedicados que compartilham 
                  o mesmo compromisso com a excelência no atendimento e a qualidade 
                  dos produtos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Atendimento Caloroso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Profissionais Capacitados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Trabalho em Equipe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Anos de Experiência</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
