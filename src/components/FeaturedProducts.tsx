import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import fruitsImage from "@/assets/fruits.jpg";
import vegetablesImage from "@/assets/vegetables.jpg";
import bakeryImage from "@/assets/bakery.jpg";
import dairyImage from "@/assets/dairy.jpg";

const categories = [
  {
    id: 1,
    name: "Frutas Frescas",
    description: "Seleção diária direto do produtor",
    image: fruitsImage,
    color: "from-orange-500/80",
  },
  {
    id: 2,
    name: "Verduras & Legumes",
    description: "Orgânicos e convencionais",
    image: vegetablesImage,
    color: "from-green-600/80",
  },
  {
    id: 3,
    name: "Padaria Artesanal",
    description: "Pães frescos todos os dias",
    image: bakeryImage,
    color: "from-amber-700/80",
  },
  {
    id: 4,
    name: "Laticínios",
    description: "Leite, queijos e iogurtes",
    image: dairyImage,
    color: "from-sky-600/80",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="produtos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Nossos Produtos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Qualidade que você pode confiar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos com os melhores fornecedores para trazer produtos frescos 
            e de qualidade para a sua mesa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/produtos" className="group block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent opacity-90`} />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-display text-2xl font-bold text-background mb-1">
                      {category.name}
                    </h3>
                    <p className="text-background/80 text-sm">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-background font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Ver categoria</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="font-semibold">
            <Link to="/produtos">
              Ver Todos os Produtos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
