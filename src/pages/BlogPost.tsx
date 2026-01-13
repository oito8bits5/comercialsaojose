import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ChefHat, ArrowLeft, Share2, Printer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
  ingredients?: string[];
  instructions?: string[];
  tips?: string[];
}> = {
  "salada-frutas-perfeita": {
    title: "Como fazer a salada de frutas perfeita",
    excerpt: "Aprenda a combinar as frutas certas para uma salada refrescante e nutritiva.",
    image: "🍓",
    category: "Receitas",
    readTime: "5 min",
    date: "15 Jan 2024",
    content: "A salada de frutas é uma sobremesa clássica brasileira, perfeita para dias quentes. O segredo está na combinação das frutas e no ponto certo de maturação de cada uma.",
    ingredients: [
      "2 bananas maduras",
      "1 maçã verde",
      "1 maçã vermelha",
      "1 laranja",
      "1 manga madura",
      "1 xícara de morangos",
      "Suco de 1 limão",
      "2 colheres de mel (opcional)",
      "Hortelã para decorar"
    ],
    instructions: [
      "Lave bem todas as frutas antes de começar",
      "Corte as bananas em rodelas médias",
      "Pique as maçãs em cubos, sem descascar para manter as vitaminas",
      "Descasque a laranja e separe os gomos",
      "Corte a manga em cubos",
      "Corte os morangos ao meio",
      "Misture todas as frutas em uma tigela grande",
      "Adicione o suco de limão para evitar oxidação",
      "Se desejar, adicione o mel e misture delicadamente",
      "Decore com folhas de hortelã e sirva gelada"
    ],
    tips: [
      "Escolha frutas da estação para garantir mais sabor e economia",
      "O suco de limão evita que as frutas escureçam",
      "Pode adicionar granola ou aveia para uma versão mais nutritiva",
      "Sirva em até 2 horas para manter a textura das frutas"
    ]
  },
  "conservar-verduras": {
    title: "Dicas para conservar verduras por mais tempo",
    excerpt: "Descubra técnicas simples para manter suas verduras frescas por muito mais tempo.",
    image: "🥬",
    category: "Dicas",
    readTime: "4 min",
    date: "12 Jan 2024",
    content: "Conservar verduras corretamente pode fazer a diferença entre uma semana de comida fresca e desperdício desnecessário. Confira nossas dicas práticas:",
    tips: [
      "Alface: Lave, seque bem e guarde em um pote hermético com papel toalha no fundo",
      "Coentro e salsinha: Coloque em um copo com água como flores e cubra com um saco plástico",
      "Cenoura: Guarde em água dentro da geladeira, trocando a água a cada 2 dias",
      "Tomates: Mantenha fora da geladeira até amadurecer completamente",
      "Cebola e alho: Guarde em local seco e arejado, nunca na geladeira",
      "Batatas: Armazene em local escuro e fresco para evitar brotos",
      "Verduras folhosas: Nunca lave antes de guardar, a umidade acelera o apodrecimento"
    ]
  },
  "pao-caseiro-facil": {
    title: "Pão caseiro fácil com ingredientes do mercadinho",
    excerpt: "Receita simples de pão caseiro que qualquer um pode fazer em casa.",
    image: "🍞",
    category: "Receitas",
    readTime: "8 min",
    date: "10 Jan 2024",
    content: "Não há nada como o cheiro de pão fresquinho saindo do forno. Esta receita é simples e usa ingredientes básicos que você encontra no nosso mercadinho.",
    ingredients: [
      "500g de farinha de trigo",
      "10g de sal",
      "10g de fermento biológico seco",
      "300ml de água morna",
      "2 colheres de sopa de azeite"
    ],
    instructions: [
      "Em uma tigela grande, misture a farinha e o sal",
      "Faça um buraco no centro e adicione o fermento",
      "Despeje a água morna sobre o fermento e deixe descansar 5 minutos",
      "Adicione o azeite e misture até formar uma massa",
      "Sove a massa por 10 minutos até ficar lisa e elástica",
      "Cubra com um pano e deixe crescer por 1 hora",
      "Modele o pão e coloque em forma untada",
      "Deixe crescer mais 30 minutos",
      "Asse em forno pré-aquecido a 200°C por 30-35 minutos"
    ],
    tips: [
      "A água deve estar morna, nunca quente, para não matar o fermento",
      "Se a massa grudar nas mãos, unte-as com um pouco de azeite",
      "O pão está pronto quando bater no fundo e soar oco"
    ]
  },
  "smoothie-verde": {
    title: "Smoothie verde energizante para o café da manhã",
    excerpt: "Comece o dia com energia! Esta receita de smoothie verde é deliciosa e super nutritiva.",
    image: "🥤",
    category: "Receitas",
    readTime: "3 min",
    date: "8 Jan 2024",
    content: "O smoothie verde é a forma perfeita de começar o dia com energia e nutrientes. Esta versão é deliciosa e não tem gosto de 'mato'!",
    ingredients: [
      "1 banana congelada",
      "1 xícara de espinafre fresco",
      "1/2 maçã verde",
      "200ml de água de coco",
      "1 colher de sopa de mel",
      "Gelo a gosto"
    ],
    instructions: [
      "Coloque todos os ingredientes no liquidificador",
      "Bata por 2 minutos até ficar cremoso",
      "Ajuste a consistência com mais água de coco se necessário",
      "Sirva imediatamente para aproveitar todos os nutrientes"
    ],
    tips: [
      "Congele as bananas maduras para ter sempre à mão",
      "Pode substituir o espinafre por couve",
      "Adicione sementes de chia para mais fibras"
    ]
  },
  "escolher-frutas-maduras": {
    title: "Como escolher frutas no ponto certo",
    excerpt: "Guia completo para identificar quando cada tipo de fruta está no ponto ideal.",
    image: "🍎",
    category: "Dicas",
    readTime: "6 min",
    date: "5 Jan 2024",
    content: "Saber escolher frutas no ponto certo faz toda a diferença no sabor. Confira nosso guia prático:",
    tips: [
      "Banana: Prefira as com casca amarela uniforme, sem manchas verdes nas pontas",
      "Manga: Deve ceder levemente à pressão e ter aroma doce na base",
      "Abacate: Pressione de leve perto do cabo - se ceder um pouco, está no ponto",
      "Melancia: Bata com os nós dos dedos - o som deve ser oco e profundo",
      "Mamão: A casca deve estar mais amarela que verde e ceder à pressão",
      "Laranja: Escolha as mais pesadas para o tamanho, indica mais suco",
      "Morango: Cor vermelho intenso uniforme, sem partes brancas ou verdes",
      "Maçã: Casca brilhante e firme, sem machucados ou partes moles"
    ]
  },
  "bolo-banana-aveia": {
    title: "Bolo de banana com aveia - receita saudável",
    excerpt: "Uma receita deliciosa e saudável de bolo de banana.",
    image: "🍰",
    category: "Receitas",
    readTime: "7 min",
    date: "3 Jan 2024",
    content: "Este bolo é perfeito para quem quer algo doce sem culpa. Feito com ingredientes naturais e sem açúcar refinado!",
    ingredients: [
      "3 bananas maduras",
      "2 ovos",
      "1 xícara de aveia em flocos",
      "1/2 xícara de mel",
      "1 colher de chá de canela",
      "1 colher de chá de fermento em pó",
      "Pitada de sal"
    ],
    instructions: [
      "Pré-aqueça o forno a 180°C",
      "Amasse as bananas com um garfo",
      "Adicione os ovos e misture bem",
      "Acrescente a aveia, mel, canela e sal",
      "Por último, adicione o fermento e misture delicadamente",
      "Despeje em forma untada",
      "Asse por 30-35 minutos até dourar",
      "Espere esfriar antes de desenformar"
    ],
    tips: [
      "Quanto mais maduras as bananas, mais doce o bolo",
      "Pode adicionar nozes ou castanhas picadas",
      "Decore com rodelas de banana e canela por cima"
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-primary/10 via-accent/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} de leitura
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              {post.title}
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-9xl mb-12"
            >
              {post.image}
            </motion.div>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 leading-relaxed mb-8"
            >
              {post.content}
            </motion.p>

            {/* Ingredients */}
            {post.ingredients && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-secondary/30 rounded-2xl p-6 mb-8"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  🛒 Ingredientes
                </h2>
                <ul className="space-y-2">
                  {post.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground/80">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Instructions */}
            {post.instructions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-primary" />
                  Modo de preparo
                </h2>
                <ol className="space-y-4">
                  {post.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-foreground/80 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </motion.div>
            )}

            {/* Tips */}
            {post.tips && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-accent/30 rounded-2xl p-6 mb-8"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4">
                  💡 Dicas
                </h2>
                <ul className="space-y-3">
                  {post.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-primary">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-4 pt-8 border-t"
            >
              <span className="text-muted-foreground">Compartilhe:</span>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
              <Button variant="outline" size="sm" className="gap-2" onClick={() => window.print()}>
                <Printer className="w-4 h-4" />
                Imprimir
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">
            Encontre todos os ingredientes no Mercadinho São José!
          </h3>
          <p className="text-muted-foreground mb-4">
            📍 Rua das Flores, 123 - Centro | ⏰ Seg a Sáb: 7h às 21h
          </p>
          <Link to="/produtos">
            <Button>Ver nossos produtos</Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
