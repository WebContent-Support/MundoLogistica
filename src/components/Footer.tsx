import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  variant?: 'default' | 'home4';
  bgImage?: string | null;
}

export default function Footer({ variant = 'default', bgImage }: FooterProps) {
  const isHome4 = variant === 'home4';

  return (
    <footer data-theme="dark" className="bg-[#040609] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {isHome4 && bgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={bgImage}
            width={1366}
            height={790}
            loading="lazy"
            decoding="async"
            alt="Fundo do Rodapé"
            className="w-full h-full object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#b42b00]/75 to-[#17191d]/90" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Logo Oficial e Redes Sociais (Foco da Simplificação da Cliente) */}
          <div className="lg:col-span-6 space-y-5">
            <Link href={isHome4 ? '/home4' : '/'} className="inline-block py-1">
              <img
                src="/logo-white.png"
                alt="MundoLogística"
                width={178}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className={`text-sm font-sans ${isHome4 ? 'text-white' : 'text-gray-300'} max-w-md leading-relaxed`}>
              O maior ecossistema de capacitação, inteligência artificial e formação continuada para líderes e profissionais de logística e supply chain do Brasil.
            </p>

            {/* Redes Sociais Oficiais em Destaque */}
            <div className="pt-2">
              <span className={`text-xs font-mono-tech font-bold uppercase tracking-wider ${isHome4 ? 'text-white' : 'text-gray-400'} block mb-3`}>
                Siga a MundoLogística:
              </span>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/mundologistica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3d03] hover:bg-[#ff3d03]/10 ${isHome4 ? 'text-white' : 'text-gray-300'} hover:text-[#ff3d03] flex items-center justify-center transition-all cursor-pointer`}
                  aria-label="LinkedIn da MundoLogística"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mundologistica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3d03] hover:bg-[#ff3d03]/10 ${isHome4 ? 'text-white' : 'text-gray-300'} hover:text-[#ff3d03] flex items-center justify-center transition-all cursor-pointer`}
                  aria-label="Instagram da MundoLogística"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@mundologistica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3d03] hover:bg-[#ff3d03]/10 ${isHome4 ? 'text-white' : 'text-gray-300'} hover:text-[#ff3d03] flex items-center justify-center transition-all cursor-pointer`}
                  aria-label="YouTube da MundoLogística"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/revistamundologistica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3d03] hover:bg-[#ff3d03]/10 ${isHome4 ? 'text-white' : 'text-gray-300'} hover:text-[#ff3d03] flex items-center justify-center transition-all cursor-pointer`}
                  aria-label="Facebook da MundoLogística"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Dados de Contato e Atendimento Corporativo */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white">
              Atendimento Corporativo B2B
            </h3>
            <ul className={`space-y-3 text-xs sm:text-sm font-sans ${isHome4 ? 'text-white' : 'text-gray-300'}`}>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff3d03] shrink-0 mt-0.5" />
                <span>Av. São Paulo, 620 - Sala 11 - Zona 01, Maringá - PR</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff3d03] shrink-0" />
                <span>WhatsApp: (44) 98812-3785</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff3d03] shrink-0" />
                <span>comercial@mundologistica.com.br</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#ff3d03] shrink-0 mt-0.5" />
                <span>Segunda a Sexta-feira: 08h às 12h e 13h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior com Copyright */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs ${isHome4 ? 'text-white' : 'text-gray-400'} gap-4`}>
          <p>© {new Date().getFullYear()} MundoLogística. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://webcontent.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={isHome4 ? 'text-white hover:text-white/80 transition-colors' : 'hover:text-gray-200 transition-colors'}
            >
              Desenvolvido por WebContent
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
