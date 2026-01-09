import { motion } from "framer-motion";
import { Tag, Clock, Percent, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const allOffers = [
  {
    id: 1,
    name: "Banana Prata",
    originalPrice: 5.99,
    salePrice: 3.99,
    discount: 33,
    unit: "kg",
    image: "🍌",
    category: "Frutas",
    endsIn: "3 dias"
  },
  {
    id: 2,
    name: "Pão Francês",
    originalPrice: 12.99,
    salePrice: 9.99,
    discount: 23,
    unit: "kg",
    image: "🥖",
    category: "Padaria",
    endsIn: "3 dias"
  },
  {
    id: 3,
    name: "Leite Integral",
    originalPrice: 6.49,
    salePrice: 4.99,
    discount: 23,
    unit: "L",
    image: "🥛",
    category: "Laticínios",
    endsIn: "3 dias"
  },
  {
    id: 4,
    name: "Tomate Italiano",
    originalPrice: 8.99,
    salePrice: 5.99,
    discount: 33,
    unit: "kg",
    image: "🍅",
    category: "Hortifruti",
    endsIn: "3 dias"
  },
  {
    id: 5,
    name: "Queijo Minas",
    originalPrice: 42.99,
    salePrice: 34.99,
    discount: 19,
    unit: "kg",
    image: "🧀",
    category: "Laticínios",
    endsIn: "3 dias"
  },
  {
    id: 6,
    name: "Maçã Fuji",
    originalPrice: 9.99,
    salePrice: 6.99,
    discount: 30,
    unit: "kg",
    image: "🍎",
    category: "Frutas",
    endsIn: "3 dias"
  },
  {
    id: 7,
    name: "Ovos Caipira",
    originalPrice: 18.99,
    salePrice: 14.99,
    discount: 21,
    unit: "dz",
    image: "🥚",
    category: "Laticínios",
    endsIn: "3 dias"
  },
  {
    id: 8,
    name: "Alface Crespa",
    originalPrice: 4.99,
    salePrice: 2.99,
    discount: 40,
    unit: "un",
    image: "🥬",
    category: "Hortifruti",
    endsIn: "3 dias"
  },
  {
    id: 9,
    name: "Bolo de Cenoura",
    originalPrice: 24.99,
    salePrice: 18.99,
    discount: 24,
    unit: "un",
    image: "🍰",
    category: "Padaria",
    endsIn: "3 dias"
  }
];

const Ofertas = () => {
  const categories = [...new Set(allOffers.map(offer => offer.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-destructive/10 via-accent/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-full mb-6">
              <Percent className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider">
                Ofertas Imperdíveis
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Promoções da Semana
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Aproveite os melhores preços do mercadinho! Ofertas válidas enquanto durarem os estoques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Countdown Banner */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-primary-foreground"
          >
            <Clock className="w-5 h-5" />
            <span className="font-semibold">
              Ofertas válidas até Domingo! Não perca tempo!
            </span>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {categories.map((category, catIndex) => (
            <div key={category} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2"
              >
                <ShoppingBag className="w-6 h-6 text-primary" />
                {category}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allOffers
                  .filter(offer => offer.category === category)
                  .map((offer, index) => (
                    <motion.div
                      key={offer.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card rounded-2xl p-6 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      {/* Discount Badge */}
                      <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        -{offer.discount}%
                      </div>

                      <div className="text-7xl mb-4 text-center">{offer.image}</div>

                      <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                        {offer.name}
                      </h3>

                      <div className="flex flex-col items-center gap-1 mb-3">
                        <span className="text-muted-foreground line-through text-sm">
                          De R$ {offer.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-primary font-medium">Por</span>
                          <span className="text-3xl font-bold text-primary">
                            R$ {offer.salePrice.toFixed(2).replace('.', ',')}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            /{offer.unit}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Termina em {offer.endsIn}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Não perca nenhuma oferta!
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Visite nossa loja e aproveite essas e muitas outras promoções. 
              Produtos frescos e preços imbatíveis esperando por você!
            </p>
            <div className="text-lg font-semibold text-primary">
              📍 Rua das Flores, 123 - Centro | ⏰ Seg a Sáb: 7h às 21h
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Ofertas;
