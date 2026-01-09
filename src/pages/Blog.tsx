import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChefHat, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "salada-frutas-perfeita",
    title: "Como fazer a salada de frutas perfeita",
    excerpt: "Aprenda a combinar as frutas certas para uma salada refrescante e nutritiva usando as frutas frescas do nosso mercadinho.",
    image: "🍓",
    category: "Receitas",
    readTime: "5 min",
    date: "15 Jan 2024",
    featured: true
  },
  {
    id: 2,
    slug: "conservar-verduras",
    title: "Dicas para conservar verduras por mais tempo",
    excerpt: "Descubra técnicas simples para manter suas verduras frescas por muito mais tempo e evitar desperdício.",
    image: "🥬",
    category: "Dicas",
    readTime: "4 min",
    date: "12 Jan 2024",
    featured: false
  },
  {
    id: 3,
    slug: "pao-caseiro-facil",
    title: "Pão caseiro fácil com ingredientes do mercadinho",
    excerpt: "Receita simples de pão caseiro que qualquer um pode fazer em casa com ingredientes básicos.",
    image: "🍞",
    category: "Receitas",
    readTime: "8 min",
    date: "10 Jan 2024",
    featured: true
  },
  {
    id: 4,
    slug: "smoothie-verde",
    title: "Smoothie verde energizante para o café da manhã",
    excerpt: "Comece o dia com energia! Esta receita de smoothie verde é deliciosa e super nutritiva.",
    image: "🥤",
    category: "Receitas",
    readTime: "3 min",
    date: "8 Jan 2024",
    featured: false
  },
  {
    id: 5,
    slug: "escolher-frutas-maduras",
    title: "Como escolher frutas no ponto certo",
    excerpt: "Guia completo para identificar quando cada tipo de fruta está no ponto ideal para consumo.",
    image: "🍎",
    category: "Dicas",
    readTime: "6 min",
    date: "5 Jan 2024",
    featured: false
  },
  {
    id: 6,
    slug: "bolo-banana-aveia",
    title: "Bolo de banana com aveia - receita saudável",
    excerpt: "Uma receita deliciosa e saudável de bolo de banana, perfeita para o lanche da tarde.",
    image: "🍰",
    category: "Receitas",
    readTime: "7 min",
    date: "3 Jan 2024",
    featured: true
  }
];

const categories = ["Todas", "Receitas", "Dicas"];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
              <ChefHat className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider">
                Blog do Mercadinho
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Receitas & Dicas
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra receitas deliciosas e dicas práticas para aproveitar ao máximo 
              os produtos frescos do nosso mercadinho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-foreground mb-8"
          >
            ✨ Destaques
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-primary/10 flex items-center justify-center text-7xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* All Posts */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-foreground mb-8"
          >
            📚 Todos os posts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-md group hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{post.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="bg-secondary px-2 py-0.5 rounded font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                    >
                      Ler mais
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Tem uma receita para compartilhar?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Adoramos receber receitas dos nossos clientes! Entre em contato pelo WhatsApp 
              e sua receita pode aparecer aqui no nosso blog.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
