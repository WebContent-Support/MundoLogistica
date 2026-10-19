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
    interest: 'Plano Premium (Com Cursos e Dashboard)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simula envio rápido para API / HubSpot
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="proposta" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-gray-800">
          {/* Luz de destaque Laranja */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#ff3d03]/20 blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-white">Solicitação Recebida com Sucesso!</h3>
              <p className="text-gray-300 max-w-lg mx-auto text-base">
                Obrigado pelo interesse, <strong className="text-white">{formData.name}</strong>. Nossa equipe comercial corporativa da MundoLogística entrará em contato via WhatsApp e e-mail em até <strong>2 horas úteis</strong> com sua proposta sob medida.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff3d03] hover:underline"
              >
                Enviar nova solicitação
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Informações ao Lado */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03] bg-[#ff3d03]/15 px-3.5 py-1.5 rounded-full inline-block">
                  Atendimento Corporativo
                </span>
                <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
                  Solicite uma proposta personalizada para a sua empresa
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Preencha o formulário para receber uma demonstração completa do acervo de cursos, do LogGPT e as condições especiais para o seu time.
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-800 text-xs text-gray-300">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#ff3d03] shrink-0" />
                    <span>Retorno garantido em até 2 horas úteis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#ff3d03] shrink-0" />
                    <span>Dados 100% protegidos pelas diretrizes da LGPD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#ff3d03] shrink-0" />
                    <span>Atendimento direto via WhatsApp corporativo</span>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-sm text-white focus:outline-none focus:border-[#ff3d03] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@suaempresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-sm text-white focus:outline-none focus:border-[#ff3d03] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-sm text-white focus:outline-none focus:border-[#ff3d03] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Logística Brasil S/A"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-sm text-white focus:outline-none focus:border-[#ff3d03] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                        Seu Cargo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Gerente de Supply Chain / RH"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-sm text-white focus:outline-none focus:border-[#ff3d03] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                        Tamanho da Equipe
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-sm text-white focus:outline-none focus:border-[#ff3d03] transition-colors"
                      >
                        <option value="1 a 5 colaboradores">1 a 5 colaboradores</option>
                        <option value="6 a 15 colaboradores">6 a 15 colaboradores</option>
                        <option value="16 a 40 colaboradores">16 a 40 colaboradores</option>
                        <option value="Mais de 40 colaboradores">Mais de 40 colaboradores</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-bold text-base text-white bg-[#ff3d03] hover:bg-[#e03502] transition-all shadow-xl shadow-[#ff3d03]/30 hover:shadow-[#ff3d03]/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Processando solicitação...</span>
                      ) : (
                        <>
                          <span>Receber Proposta Customizada</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
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
