'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Code2,
  Database,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Play,
  Server,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getApiBaseUrl } from '@/data/courses';

const EXAMPLE_STANDARD = `{
  "id": 1,
  "slug": "a-cadeia-de-suprimentos-hoje-integrada-conectada-e-pro-ativa",
  "tema": "A cadeia de suprimentos hoje: integrada, conectada e pró-ativa",
  "professor": "Paulo Oliveira",
  "cargo": "Head de Comunidade",
  "resumo": "Aprenda a estruturar e gerenciar cadeias de suprimentos modernas, integradas e orientadas por dados...",
  "o_que_vai_aprender": "Entenda os desafios e oportunidades da sustentabilidade, o papel do planejamento integrado com S&OP...",
  "categoria": "Operações",
  "foto_professor": "https://cdn.mundologistica.com.br/instructors/paulo.jpg",
  "foto_capa": "https://cdn.mundologistica.com.br/courses/supply-chain.jpg",
  "duracao": null,
  "nivel": null,
  "experiencia_professor": null,
  "modulos": null,
  "destaque_home": true,
  "ordem": 1
}`;

const EXAMPLE_FULL = `{
  "id": 31,
  "slug": "reforma-tributaria-impactos-em-transportes",
  "tema": "Reforma tributária: Impactos em transportes",
  "professor": "Rafael Brito",
  "cargo": "CEO",
  "resumo": "A Reforma Tributária muda a forma como você calcula custos, precifica serviços e gerencia lucro...",
  "o_que_vai_aprender": "Neste curso, Rafael Brito, CEO da Rumo Brasil e especialista em Reforma Tributária, te guia através das 7 aulas...",
  "categoria": "Operações",
  "foto_professor": "https://cdn.mundologistica.com.br/instructors/rafael-brito.jpg",
  "foto_capa": "https://cdn.mundologistica.com.br/courses/course-tax.jpg",
  "duracao": "7 aulas (10h)",
  "nivel": "Executivo",
  "experiencia_professor": "CEO da Rumo Brasil • +15 anos em Tributos",
  "modulos": [
    "Aula 1: O ano da decisão (2026) para transportadoras",
    "Aula 2: IVA Dual (CBS e IBS) na matemática do frete",
    "Aula 3: Estratégias de créditos e não-cumulatividade",
    "Aula 4: Split payment, capital de giro e plano 2026-2032"
  ],
  "destaque_home": true,
  "ordem": 31
}`;

export default function ApiDocsPage() {
  const [apiBaseUrl, setApiBaseUrl] = useState<string>('http://localhost:8080');
  const [liveJson, setLiveJson] = useState<string>('Carregando resposta da API...');
  const [liveMeta, setLiveMeta] = useState<string>('');
  const [activeQuery, setActiveQuery] = useState<string>('/courses.php');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const testLiveEndpoint = useCallback(async (queryPath: string, customBase?: string) => {
    const base = customBase || getApiBaseUrl();
    setApiBaseUrl(base);
    setActiveQuery(queryPath);
    setLiveJson(`Consultando ${base}${queryPath}...`);
    const start = performance.now();
    try {
      const response = await fetch(`${base}${queryPath}`);
      const json = await response.json();
      const elapsed = Math.round(performance.now() - start);
      setLiveMeta(`HTTP ${response.status} • ${elapsed}ms • ${json.total ?? 0} curso(s)`);
      setLiveJson(JSON.stringify(json, null, 2));
    } catch {
      setLiveMeta('API indisponível ou bloqueada');
      setLiveJson(
        `Não foi possível conectar em ${base}${queryPath}.\nVerifique se o endpoint da API está acessível.`
      );
    }
  }, []);

  useEffect(() => {
    const resolved = getApiBaseUrl();
    setApiBaseUrl(resolved);
    testLiveEndpoint('/courses.php', resolved);
  }, [testLiveEndpoint]);

  const copyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06080d] text-white selection:bg-[#ff3d03] selection:text-white">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Topo & Navegação */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider mb-6"
            >
              <ArrowLeft className="w-4 h-4 text-[#ff3d03]" />
              Voltar para a Página Principal
            </Link>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3d03]/10 border border-[#ff3d03]/30 mb-4">
                <Code2 className="w-3.5 h-3.5 text-[#ff3d03]" />
                <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#ff3d03]">
                  Especificação Técnica de Integração • v1.0
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight mb-4">
                Documentação da <span className="text-[#ff3d03]">API de Cursos</span>
              </h1>
              <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed max-w-4xl">
                Esta página documenta o contrato JSON oficial que alimenta os cursos da plataforma{' '}
                <strong>MundoLogística</strong> (tanto os 6 cursos em destaque na Home quanto o catálogo completo em{' '}
                <code className="text-orange-300 bg-white/5 px-1.5 py-0.5 rounded">/cursos</code>). Para integrar o
                sistema interno do cliente, basta expor um endpoint HTTP GET que retorne a estrutura abaixo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="bg-black/50 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                  <Server className="w-5 h-5 text-[#ff3d03] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase block">Protocolo & Content-Type</span>
                    <span className="text-sm font-bold text-white">GET • application/json (UTF-8)</span>
                  </div>
                </div>
                <div className="bg-black/50 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase block">Cabeçalho CORS Obrigatório</span>
                    <span className="text-sm font-bold text-white">Access-Control-Allow-Origin: *</span>
                  </div>
                </div>
                <div className="bg-black/50 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                  <SlidersHorizontal className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase block">Campos Extras / Vazios</span>
                    <span className="text-sm font-bold text-white">Ocultados no site quando null</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Endpoint & Parâmetros */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-[#ff3d03] font-mono">01.</span> Endpoint & Parâmetros de Consulta
            </h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-black/70 border border-white/10 rounded-2xl p-4">
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold w-fit">
                  GET
                </span>
                <code className="text-sm sm:text-base text-white font-mono break-all">
                  {apiBaseUrl}/courses.php
                </code>
                <a
                  href={`${apiBaseUrl}/courses.php`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:ml-auto inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#ff3d03] hover:text-orange-400"
                >
                  <span>Abrir endpoint bruto</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 font-mono text-xs uppercase">
                      <th className="py-3 pr-4">Parâmetro Query</th>
                      <th className="py-3 px-4">Tipo</th>
                      <th className="py-3 px-4">Exemplo</th>
                      <th className="py-3 pl-4">Comportamento Esperado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-400 font-bold">destaque</td>
                      <td className="py-3 px-4 font-mono text-xs">1 | true</td>
                      <td className="py-3 px-4 font-mono text-xs text-gray-400">?destaque=1</td>
                      <td className="py-3 pl-4">
                        Filtra apenas os cursos marcados para destaque na página inicial (<code className="text-white">destaque_home = true</code>).
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-400 font-bold">categoria</td>
                      <td className="py-3 px-4 font-mono text-xs">string</td>
                      <td className="py-3 px-4 font-mono text-xs text-gray-400">?categoria=Operações</td>
                      <td className="py-3 pl-4">
                        Filtra os cursos pela trilha informada (ex: <code className="text-white">Operações</code>,{' '}
                        <code className="text-white">Gestão</code>, <code className="text-white">Estratégia</code>,{' '}
                        <code className="text-white">Eventos</code>).
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-400 font-bold">q</td>
                      <td className="py-3 px-4 font-mono text-xs">string</td>
                      <td className="py-3 px-4 font-mono text-xs text-gray-400">?q=tributária</td>
                      <td className="py-3 pl-4">
                        Busca por palavra-chave no tema, professor, resumo ou conteúdo programático.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-400 font-bold">slug / id</td>
                      <td className="py-3 px-4 font-mono text-xs">string / int</td>
                      <td className="py-3 px-4 font-mono text-xs text-gray-400">?id=1</td>
                      <td className="py-3 pl-4">Retorna os dados de um único curso específico.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 2. Dicionário de Campos */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-[#ff3d03] font-mono">02.</span> Estrutura de Dados & Regras de Exibição
            </h2>

            {/* Envelope */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03]">
                A. Objeto Raiz da Resposta (Envelope)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 font-mono text-xs uppercase">
                      <th className="py-2.5 pr-4">Propriedade</th>
                      <th className="py-2.5 px-4">Tipo</th>
                      <th className="py-2.5 px-4">Obrigatório</th>
                      <th className="py-2.5 pl-4">Descrição</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr>
                      <td className="py-2.5 pr-4 font-mono text-white font-bold">success</td>
                      <td className="py-2.5 px-4 font-mono text-xs text-emerald-400">boolean</td>
                      <td className="py-2.5 px-4">Sim</td>
                      <td className="py-2.5 pl-4">Indica sucesso na resposta da API (<code className="text-white">true</code>).</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-mono text-white font-bold">total</td>
                      <td className="py-2.5 px-4 font-mono text-xs text-emerald-400">number</td>
                      <td className="py-2.5 px-4">Sim</td>
                      <td className="py-2.5 pl-4">Quantidade total de cursos retornados em <code className="text-white">data</code>.</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-mono text-white font-bold">categorias</td>
                      <td className="py-2.5 px-4 font-mono text-xs text-emerald-400">string[]</td>
                      <td className="py-2.5 px-4">Sim</td>
                      <td className="py-2.5 pl-4">
                        Lista das categorias disponíveis (ex: <code className="text-white">[&quot;Estratégia&quot;, &quot;Eventos&quot;, &quot;Gestão&quot;, &quot;Operações&quot;]</code>).
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-mono text-white font-bold">data</td>
                      <td className="py-2.5 px-4 font-mono text-xs text-emerald-400">Course[]</td>
                      <td className="py-2.5 px-4">Sim</td>
                      <td className="py-2.5 pl-4">Lista de cursos detalhada abaixo.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Objeto Curso */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03]">
                B. Campos de Cada Curso (<code className="text-white">data[]</code>)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 font-mono text-xs uppercase">
                      <th className="py-3 pr-4">Campo</th>
                      <th className="py-3 px-4">Tipo</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 pl-4">Uso no Site & Comportamento quando <code className="text-orange-300">null</code> / vazio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr>
                      <td className="py-3 pr-4 font-mono text-white font-bold">id</td>
                      <td className="py-3 px-4 font-mono text-xs text-emerald-400">number | string</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono">Obrigatório</span></td>
                      <td className="py-3 pl-4">ID único do curso.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-white font-bold">slug</td>
                      <td className="py-3 px-4 font-mono text-xs text-emerald-400">string</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono">Obrigatório</span></td>
                      <td className="py-3 pl-4">Identificador amigável sem acentos/espaços.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-white font-bold">tema</td>
                      <td className="py-3 px-4 font-mono text-xs text-emerald-400">string</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono">Obrigatório</span></td>
                      <td className="py-3 pl-4">Título do curso exibido no Card e no Modal.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-white font-bold">categoria</td>
                      <td className="py-3 px-4 font-mono text-xs text-emerald-400">string</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono">Obrigatório</span></td>
                      <td className="py-3 pl-4">Trilha do curso exibida na badge da foto e usada no filtro de categorias.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-white font-bold">resumo</td>
                      <td className="py-3 px-4 font-mono text-xs text-emerald-400">string</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono">Obrigatório</span></td>
                      <td className="py-3 pl-4">1º parágrafo descritivo (exibido em 2 linhas no card e completo na abertura do modal).</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-white font-bold">professor</td>
                      <td className="py-3 px-4 font-mono text-xs text-emerald-400">string</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono">Obrigatório</span></td>
                      <td className="py-3 pl-4">Nome do especialista responsável.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-300 font-bold">cargo</td>
                      <td className="py-3 px-4 font-mono text-xs text-amber-300">string | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono">Condicional</span></td>
                      <td className="py-3 pl-4">Cargo do professor. <strong>Quando <code className="text-orange-300">null</code>:</strong> oculta a linha de cargo no card e no modal.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-300 font-bold">o_que_vai_aprender</td>
                      <td className="py-3 px-4 font-mono text-xs text-amber-300">string | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono">Condicional</span></td>
                      <td className="py-3 pl-4">Texto detalhado exibido na seção <em>&ldquo;O que você vai aprender&rdquo;</em> dentro do modal. <strong>Quando <code className="text-orange-300">null</code>:</strong> oculta a seção.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-300 font-bold">foto_professor</td>
                      <td className="py-3 px-4 font-mono text-xs text-amber-300">string (URL) | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono">Condicional</span></td>
                      <td className="py-3 pl-4"><strong>URL absoluta completa</strong> da foto do instrutor (ex: bucket S3 / CDN <code className="text-gray-400">https://...</code>).</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-orange-300 font-bold">foto_capa</td>
                      <td className="py-3 px-4 font-mono text-xs text-amber-300">string (URL) | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono">Condicional</span></td>
                      <td className="py-3 pl-4"><strong>URL absoluta completa</strong> da imagem de capa do curso (ex: bucket S3 / CDN <code className="text-gray-400">https://...</code>, proporção 16:10).</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-sky-300 font-bold">duracao</td>
                      <td className="py-3 px-4 font-mono text-xs text-sky-300">string | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-mono">Extra Opcional</span></td>
                      <td className="py-3 pl-4">Ex: <code className="text-gray-400">&quot;12h de aulas&quot;</code>. <strong>Quando <code className="text-orange-300">null</code>:</strong> não exibe o badge de relógio na foto nem a carga horária no modal.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-sky-300 font-bold">nivel</td>
                      <td className="py-3 px-4 font-mono text-xs text-sky-300">string | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-mono">Extra Opcional</span></td>
                      <td className="py-3 pl-4">Ex: <code className="text-gray-400">&quot;Executivo&quot;</code>. <strong>Quando <code className="text-orange-300">null</code>:</strong> não exibe o badge superior direito na foto nem o nível no modal.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-sky-300 font-bold">experiencia_professor</td>
                      <td className="py-3 px-4 font-mono text-xs text-sky-300">string | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-mono">Extra Opcional</span></td>
                      <td className="py-3 pl-4">Ex: <code className="text-gray-400">&quot;+20 anos em Supply Chain&quot;</code>. <strong>Quando <code className="text-orange-300">null</code>:</strong> não exibe a 3ª linha abaixo do nome do professor.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-sky-300 font-bold">modulos</td>
                      <td className="py-3 px-4 font-mono text-xs text-sky-300">string[] | null</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-mono">Extra Opcional</span></td>
                      <td className="py-3 pl-4">Array de aulas/módulos. <strong>Quando <code className="text-orange-300">null</code> ou <code className="text-orange-300">[]</code>:</strong> não exibe a lista numerada de módulos no modal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 3. Exemplos de Payload */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-[#ff3d03] font-mono">03.</span> Exemplos de Payload (Padrão vs Completo)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Exemplo A: Curso Padrão (Planilha Atual)
                  </span>
                  <button
                    type="button"
                    onClick={() => copyText('std', EXAMPLE_STANDARD)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white cursor-pointer"
                  >
                    {copiedKey === 'std' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'std' ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="bg-black/80 border border-white/10 rounded-2xl p-4 text-xs text-gray-200 overflow-x-auto flex-1 leading-relaxed">
                  {EXAMPLE_STANDARD}
                </pre>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    Exemplo B: Curso com Campos Extras Preenchidos
                  </span>
                  <button
                    type="button"
                    onClick={() => copyText('full', EXAMPLE_FULL)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white cursor-pointer"
                  >
                    {copiedKey === 'full' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'full' ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="bg-black/80 border border-white/10 rounded-2xl p-4 text-xs text-gray-200 overflow-x-auto flex-1 leading-relaxed">
                  {EXAMPLE_FULL}
                </pre>
              </div>
            </div>
          </section>

          {/* 4. Testador Interativo ao Vivo */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-[#ff3d03] font-mono">04.</span> Testador ao Vivo ({apiBaseUrl})
            </h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { label: 'Todos (32 cursos)', path: '/courses.php' },
                  { label: 'Destaques da Home (?destaque=1)', path: '/courses.php?destaque=1' },
                  { label: 'Categoria: Operações', path: '/courses.php?categoria=Opera%C3%A7%C3%B5es' },
                  { label: 'Categoria: Estratégia', path: '/courses.php?categoria=Estrat%C3%A9gia' },
                  { label: 'Categoria: Gestão', path: '/courses.php?categoria=Gest%C3%A3o' },
                  { label: 'Busca: ?q=ESG', path: '/courses.php?q=ESG' },
                ].map((item) => {
                  const isActive = activeQuery === item.path;
                  return (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => testLiveEndpoint(item.path)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                        isActive
                          ? 'bg-[#ff3d03] text-white shadow-lg shadow-[#ff3d03]/25'
                          : 'bg-white/10 hover:bg-white/20 text-gray-200'
                      }`}
                    >
                      <Play className="w-3 h-3" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                {liveMeta && (
                  <span className="ml-auto text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    {liveMeta}
                  </span>
                )}
              </div>

              <pre className="bg-black/80 border border-white/10 rounded-2xl p-4 text-xs text-emerald-300 overflow-x-auto max-h-[480px] leading-relaxed">
                {liveJson}
              </pre>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
