import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente há 5 anos",
    content: "O Mercadinho São Jose é como uma extensão da minha casa. Produtos sempre frescos e atendimento impecável!",
    rating: 5,
    avatar: "MS"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Cliente há 3 anos",
    content: "Preços justos e qualidade incomparável. Os produtos da padaria são os melhores do bairro!",
    rating: 5,
    avatar: "JS"
  },
  {
    id: 3,
    name: "Ana Oliveira",
    role: "Cliente há 2 anos",
    content: "Adoro fazer compras aqui. A equipe conhece todos pelo nome e sempre tem dicas de receitas!",
    rating: 5,
    avatar: "AO"
  },
  {
    id: 4,
    name: "Carlos Ferreira",
    role: "Cliente há 4 anos",
    content: "Frutas e verduras fresquinhas todos os dias. Minha família não compra em outro lugar!",
    rating: 5,
    avatar: "CF"
  },
  {
    id: 5,
    name: "Lucia Mendes",
    role: "Cliente há 1 ano",
    content: "Me mudei para o bairro recentemente e encontrei esse tesouro. Atendimento acolhedor demais!",
    rating: 5,
    avatar: "LM"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>

                    <p className="text-foreground/80 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
