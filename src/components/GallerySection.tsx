import { motion } from "framer-motion";
import heroImage from "@/assets/hero-store.jpg";
import storeExterior from "@/assets/store-exterior.jpg";
import fruitsImage from "@/assets/fruits.jpg";
import vegetablesImage from "@/assets/vegetables.jpg";
import teamImage from "@/assets/team.jpg";
import bakeryImage from "@/assets/bakery.jpg";

const images = [
  { src: heroImage, alt: "Interior da loja", span: "col-span-2 row-span-2" },
  { src: storeExterior, alt: "Fachada da loja", span: "col-span-1 row-span-1" },
  { src: fruitsImage, alt: "Seção de frutas", span: "col-span-1 row-span-1" },
  { src: vegetablesImage, alt: "Seção de verduras", span: "col-span-1 row-span-1" },
  { src: teamImage, alt: "Nossa equipe", span: "col-span-1 row-span-1" },
  { src: bakeryImage, alt: "Padaria artesanal", span: "col-span-2 row-span-1" },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Galeria
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Conheça nosso espaço
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um ambiente acolhedor onde cada detalhe foi pensado para 
            oferecer a melhor experiência de compra.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
