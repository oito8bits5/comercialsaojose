import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fruitsImage from "@/assets/fruits.jpg";
import vegetablesImage from "@/assets/vegetables.jpg";
import bakeryImage from "@/assets/bakery.jpg";
import dairyImage from "@/assets/dairy.jpg";

const categories = [
  {
    id: 1,
    name: "Frutas Frescas",
    description: "Maçãs, laranjas, bananas, uvas, morangos e muito mais. Seleção diária direto do produtor.",
    image: fruitsImage,
    products: ["Maçã Fuji", "Laranja Pera", "Banana Nanica", "Uva Itália", "Morango", "Manga Palmer"],
  },
  {
    id: 2,
    name: "Verduras & Legumes",
    description: "Vegetais frescos, orgânicos e convencionais para uma alimentação saudável.",
    image: vegetablesImage,
    products: ["Alface Crespa", "Tomate Italiano", "Cenoura", "Brócolis", "Abobrinha", "Pimentão"],
  },
  {
    id: 3,
    name: "Padaria Artesanal",
    description: "Pães frescos, bolos e doces preparados diariamente com ingredientes selecionados.",
    image: bakeryImage,
    products: ["Pão Francês", "Pão de Forma", "Croissant", "Bolo de Cenoura", "Sonho", "Pão de Queijo"],
  },
  {
    id: 4,
    name: "Laticínios",
    description: "Leite, queijos, iogurtes e manteigas das melhores marcas.",
    image: dairyImage,
    products: ["Leite Integral", "Queijo Mussarela", "Iogurte Natural", "Requeijão", "Manteiga", "Cream Cheese"],
  },
];

const moreCategories = [
  { name: "Bebidas", items: ["Refrigerantes", "Sucos", "Águas", "Cervejas", "Vinhos"] },
  { name: "Mercearia", items: ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"] },
  { name: "Higiene", items: ["Sabonetes", "Shampoo", "Creme Dental", "Papel Higiênico"] },
  { name: "Limpeza", items: ["Detergente", "Desinfetante", "Amaciante", "Água Sanitária"] },
  { name: "Congelados", items: ["Sorvetes", "Pizzas", "Legumes Congelados", "Carnes"] },
  { name: "Doces", items: ["Chocolates", "Biscoitos", "Balas", "Doce de Leite"] },
];

const Produtos = () => {
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
                Nossos Produtos
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore nossa variedade de produtos frescos e de qualidade, 
                selecionados especialmente para você.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product) => (
                        <span
                          key={product}
                          className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More Categories */}
        <section className="py-16 bg-warm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mais Categorias
              </h2>
              <p className="text-muted-foreground text-lg">
                Encontre tudo o que você precisa em um só lugar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Produtos;
