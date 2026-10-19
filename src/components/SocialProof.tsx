import { Quote, Play, Star, Building2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    author: 'Alberto Rodrigues',
    role: 'Diretor de Logística',
    company: 'Yara Brasil',
    quote: 'A MundoLogística é a referência técnica mais sólida que temos no país. Capacitar nossos analistas e supervisores com este acervo elevou consideravelmente o nível das discussões estratégicas e a maturidade da nossa operação.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    author: 'Alexandre Faria',
    role: 'VP de Supply Chain',
    company: 'Dafiti',
    quote: 'A facilidade de ter cursos práticos ministrados por quem realmente está no campo de batalha, combinada com o LogGPT para tirar dúvidas diárias, trouxe uma agilidade inédita para o nosso time de operações e transporte.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    author: 'Carlos Jardim',
    role: 'Diretor de Supply Chain',
    company: 'Pfizer',
    quote: 'Em um setor altamente regulado e crítico como o farmacêutico, a profundidade técnica dos materiais da MundoLogística é indispensável para mantermos nossa equipe atualizada com as melhores práticas mundiais.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03] bg-orange-100/70 px-3.5 py-1.5 rounded-full">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 mt-4 mb-4 tracking-tight">
            O que dizem os líderes que transformaram suas equipes
          </h2>
          <p className="text-gray-600 text-lg">
            Mais de 400 empresas confiam na MundoLogística para elevar o patamar técnico de suas operações.
          </p>
        </div>

        {/* Vídeo Institucional Oficial */}
        <div className="max-w-4xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-gray-900 aspect-video relative group">
          <iframe
            src="https://www.youtube.com/embed/Yho4vdRKQOs"
            title="Conheça a Plataforma MundoLogística"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 hover:border-[#ff3d03]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ff3d03] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-orange-200 mb-3" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                  <p className="text-xs font-bold text-[#ff3d03] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" />
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
