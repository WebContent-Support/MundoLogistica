import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Logo e Missão */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-[#ff3d03] flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-[#ff3d03]/20">
                ML
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  Mundo<span className="text-[#ff3d03]">Logística</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mt-0.5">
                  Educação & Capacitação Corporativa
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              O maior ecossistema de conteúdo, inteligência artificial e formação continuada para líderes e profissionais de logística e supply chain do Brasil.
            </p>

            <div className="pt-2 text-xs text-gray-500">
              © {new Date().getFullYear()} MundoLogística. Todos os direitos reservados.
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#ecossistema" className="hover:text-[#ff3d03] transition-colors">
                  A Plataforma
                </Link>
              </li>
              <li>
                <Link href="#cursos" className="hover:text-[#ff3d03] transition-colors">
                  Vitrine de Cursos
                </Link>
              </li>
              <li>
                <Link href="#loggpt" className="hover:text-[#ff3d03] transition-colors">
                  LogGPT (IA Especialista)
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="hover:text-[#ff3d03] transition-colors">
                  Dashboard do Gestor
                </Link>
              </li>
              <li>
                <Link href="#planos" className="hover:text-[#ff3d03] transition-colors">
                  Planos Corporativos
                </Link>
              </li>
            </ul>
          </div>

          {/* Dados de Contato Oficial */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Atendimento Corporativo</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
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

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>Desenvolvido para MundoLogística Educação por WebContent Soluções Digitais.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://mundologistica.com.br/politica-privacidade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="https://mundologistica.com.br/contato"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Central de Atendimento
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
