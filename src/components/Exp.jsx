import React from "react";

const Experience = () => {
  return (
    <section className="py-20 bg-slate-950/70 text-white px-6" id="experiencias">
      <div className="mx-auto max-w-5xl">
        <p className="uppercase tracking-[0.2em] text-xs text-amber-300 mb-2">Trajetória</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">Experiência e Formação Acadêmica</h2>

        <div className="w-full mb-12">
          <h3 className="text-2xl font-semibold mb-6 border-b border-amber-300/50 pb-3 text-amber-200">Experiência Profissional</h3>

          <div className="mb-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h4 className="text-xl font-bold text-amber-300">GEAP - Autogestão em Saúde</h4>
            <p className="text-slate-300 italic">Estagiário de TI | Março 2021 - Dezembro 2022</p>
            <p className="text-slate-400">João Pessoa, Paraíba, Brasil</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-300">
              <li>Presto suporte técnico N1 em equipamentos de telefonia, impressoras, computadores e notebooks.</li>
            </ul>
          </div>

          <div className="mb-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h4 className="text-xl font-bold text-amber-300">MDR SAÚDE</h4>
            <p className="text-slate-300 italic">Analista de Sistemas | Fevereiro 2023 - Agosto 2024</p>
            <p className="text-slate-400">João Pessoa, Paraíba, Brasil</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-300">
              <li>Preparação e manutenção de equipamentos de informática, suporte técnico N1 e N2.</li>
              <li>Integrações entre sistemas, implementação de soluções Azure Microsoft e infraestrutura de rede.</li>
              <li>Suporte no sistema Viman OPME, WMS Roma, TOTVS Protheus, TOTVS RM e AD local.</li>
              <li>Monitoramento e atendimento de chamados via GLPI e suporte remoto (Anydesk, UltraVNC, Microsoft Teams, etc.).</li>
            </ul>
          </div>

          <div className="mb-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h4 className="text-xl font-bold text-amber-300">HOSPITAL RESIDENCIAL</h4>
            <p className="text-slate-300 italic">Analista de Sistemas | Setembro 2024 - Emprego Atual</p>
            <p className="text-slate-400">João Pessoa, Paraíba, Brasil</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-300">
              <li>Estruturação de dados no banco Oracle, implantação de relatórios com Power BI, DBA e desenvolvimento de sistema de contas a receber e dashboards ReactJS.</li>
              <li>Suporte técnico N1 e N2, implementação de soluções Microsoft, infraestrutura de rede e gerenciamento de e-mails UOL Host e Locaweb.</li>
              <li>Suporte no sistema IW, monitoramento via OSTicket e suporte remoto (Anydesk e Milvus).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h4 className="text-xl font-bold text-amber-300">BROOKFIELD SOLUTIONS</h4>
            <p className="text-slate-300 italic">PJ | Maio 2025 - Prestador de serviços Atual</p>
            <p className="text-slate-400">EUA - Remoto</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-300">
              <li>Desenvolvimento e suporte para site da empresa no WordPress.</li>
              <li>Gerenciamento e suporte de e-mails no Google Workspace.</li>
            </ul>
          </div>
        </div>

        <div className="w-full mb-12">
          <h3 className="text-2xl font-semibold mb-4 border-b border-amber-300/50 pb-2 text-amber-200">Formação Acadêmica</h3>

          <ul className="list-disc ml-6 space-y-4 text-slate-300">
            <li>
              <span className="font-bold text-amber-300">Bacharelado em Redes de Computadores</span> - FPB - Faculdade Internacional da Paraíba
              <br />
              <span className="text-slate-400">2018 - Trancado</span>
            </li>
            <li>
              <span className="font-bold text-amber-300">Bacharelado em Ciências da Computação</span> - FPB - Faculdade Internacional da Paraíba
              <br />
              <span className="text-slate-400">2019 - 2022</span>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 border-b border-amber-300/50 pb-2 text-amber-200">Cursos Extracurriculares</h3>

          <ul className="list-disc ml-6 space-y-2 text-slate-300">
            <li>Scrum Foundation Professional Certificate (SFPC TM)</li>
            <li>Kanban Foundation (KIKF TM)</li>
            <li>HTML, CSS e JavaScript</li>
            <li>React JS</li>
            <li>Git e GitHub</li>
            <li>NLW Pocket: Javascript - Full-stack Intermediário</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;