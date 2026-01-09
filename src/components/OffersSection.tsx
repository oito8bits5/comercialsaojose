import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tag, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const weeklyOffers = [
  {
    id: 1,
    name: "Banana Prata",
    originalPrice: 5.99,
    salePrice: 3.99,
    discount: 33,
    unit: "kg",
    image: "🍌",
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
    endsIn: "3 dias"
  }
];

const OffersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
            <Tag className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Ofertas da Semana
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Economize com nossas promoções
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Aproveite os melhores preços em produtos selecionados. Ofertas válidas enquanto durarem os estoques!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {weeklyOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full font-bold text-sm">
                -{offer.discount}%
              </div>

              <div className="text-6xl mb-4">{offer.image}</div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {offer.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-primary">
                  R$ {offer.salePrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-muted-foreground line-through text-sm">
                  R$ {offer.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-muted-foreground text-sm">
                  /{offer.unit}
                </span>
              </div>

              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                <span>Termina em {offer.endsIn}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/ofertas">
            <Button size="lg" className="group">
              Ver todas as ofertas
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;
