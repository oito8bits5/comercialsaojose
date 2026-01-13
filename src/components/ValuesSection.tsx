import { motion } from "framer-motion";
import { Heart, Leaf, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Atendimento Familiar",
    description: "Tratamos cada cliente como parte da nossa família, com carinho e atenção personalizada.",
  },
  {
    icon: Leaf,
    title: "Produtos Frescos",
    description: "Seleção diária de frutas, verduras e legumes direto dos melhores produtores da região.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Há mais de 20 anos fazendo parte da história do bairro e da vida das famílias.",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Compromisso com a qualidade em cada produto que colocamos nas prateleiras.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Nossos Valores
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Por que escolher o Mercadinho São Jose?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Mais do que um mercado, somos um lugar onde você encontra 
            qualidade, tradição e um atendimento que faz diferença.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="font-display text-2xl md:text-3xl italic max-w-3xl mx-auto">
            "Onde a qualidade encontra o carinho de servir você e sua família."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
