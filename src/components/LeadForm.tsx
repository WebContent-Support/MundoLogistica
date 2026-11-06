'use client';

import { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, Clock, Sparkles } from 'lucide-react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    teamSize: '6 a 15 colaboradores',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="proposta" data-theme="dark" className="py-28 bg-[#06080d] text-white relative border-t border-white/10 overflow-hidden">
      {/* Imagem de Fundo Cenográfica de Centro de Distribuição em Alta Resolução */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/warehouse-tech.jpg"
          alt="Operação Logística de Alta Performance"
          className="w-full h-full object-cover opacity-25 mix-blend-screen filter blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080d] via-[#06080d]/85 to-[#06080d]" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40" />
      </div>

      {/* Ponto focal de luz neon laranja */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-[#ff3d03]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel-glow rounded-3xl p-8 sm:p-14 border border-[#ff3d03]/30 shadow-2xl relative overflow-hidden">
          {/* Luz de destaque Laranja Neon */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#ff3d03]/20 blur-[130px] pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center mx-auto border border-[#ff3d03]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-white">Solicitação Recebida com Sucesso!</h2>
              <p className="text-gray-300 max-w-lg mx-auto text-base">
                Obrigado pelo contato, <strong className="text-white">{formData.name}</strong>. Nossa equipe comercial entrará em contato via WhatsApp e e-mail em até <strong>2 horas úteis</strong> com a proposta para a <strong className="text-[#ff3d03]">{formData.company}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ff3d03] hover:underline uppercase cursor-pointer"
              >
                Enviar nova solicitação
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Informações ao Lado */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03] bg-[#ff3d03]/10 border border-[#ff3d03]/30 px-3.5 py-1.5 rounded-full inline-block">
                  Atendimento Corporativo
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Retenha talentos e prepare sua equipe para os desafios da logística!
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Preencha os dados e converse com nosso time sobre as necessidades da sua operação.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-gray-300">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#ff3d03] shrink-0" />
                    <span>Retorno comercial em até 2 horas úteis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#ff3d03] shrink-0" />
                    <span>Conformidade rigorosa com a LGPD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#ff3d03] shrink-0" />
                    <span>Canal ágil via WhatsApp oficial</span>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-name" className="block text-[11px] font-mono font-bold uppercase text-gray-300 mb-1.5 cursor-pointer">
                        Nome Completo *
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3d03] focus:ring-1 focus:ring-[#ff3d03] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-email" className="block text-[11px] font-mono font-bold uppercase text-gray-300 mb-1.5 cursor-pointer">
                        E-mail Corporativo *
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        required
                        placeholder="carlos@suaempresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3d03] focus:ring-1 focus:ring-[#ff3d03] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-phone" className="block text-[11px] font-mono font-bold uppercase text-gray-300 mb-1.5 cursor-pointer">
                        WhatsApp com DDD *
                      </label>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3d03] focus:ring-1 focus:ring-[#ff3d03] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-company" className="block text-[11px] font-mono font-bold uppercase text-gray-300 mb-1.5 cursor-pointer">
                        Nome da Empresa *
                      </label>
                      <input
                        id="lead-company"
                        name="company"
                        type="text"
                        required
                        placeholder="Ex: Logística Brasil S/A"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3d03] focus:ring-1 focus:ring-[#ff3d03] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-role" className="block text-[11px] font-mono font-bold uppercase text-gray-300 mb-1.5 cursor-pointer">
                        Cargo / Função *
                      </label>
                      <input
                        id="lead-role"
                        name="role"
                        type="text"
                        required
                        placeholder="Ex: Diretor de Supply Chain / RH"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3d03] focus:ring-1 focus:ring-[#ff3d03] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="teamSizeSelect" className="block text-[11px] font-mono font-bold uppercase text-gray-300 mb-1.5 cursor-pointer">
                        Tamanho da Equipe
                      </label>
                      <select
                        id="teamSizeSelect"
                        name="teamSize"
                        aria-label="Tamanho da Equipe"
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:border-[#ff3d03] focus:ring-1 focus:ring-[#ff3d03] transition-all cursor-pointer"
                      >
                        <option value="1 a 5 colaboradores">1 a 5 colaboradores</option>
                        <option value="6 a 15 colaboradores">6 a 15 colaboradores</option>
                        <option value="16 a 40 colaboradores">16 a 40 colaboradores</option>
                        <option value="Mais de 40 colaboradores">Mais de 40 colaboradores</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 relative">
                    {/* Spotlight cônico atrás do botão de envio */}
                    <div className="absolute inset-0 cta-spotlight pointer-events-none rounded-2xl" />

                    <div className="relative">
                      {/* Onda de Radar */}
                      <div className="absolute inset-0 rounded-2xl bg-[#ff3d03]/40 radar-wave pointer-events-none" />

                      <button
                        type="submit"
                        disabled={loading}
                        className="relative w-full py-4.5 rounded-2xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,61,3,0.5)] hover:shadow-[0_0_60px_rgba(255,61,3,0.8)] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 border border-orange-300/40 uppercase tracking-wider shimmer-btn"
                      >
                        {loading ? (
                          <span>PROCESSANDO SOLICITAÇÃO...</span>
                        ) : (
                          <>
                            <span>QUERO RECEBER UMA PROPOSTA</span>
                            <Send className="w-5 h-5 translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </div>

                    <span className="text-[11px] font-mono text-gray-400 text-center block mt-3">
                      Ao enviar, você receberá o descritivo técnico e a proposta comercial
                    </span>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
