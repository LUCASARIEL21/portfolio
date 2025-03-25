import React from "react";

const Experience = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-6" id="experiencias">
      <h2 className="text-4xl font-semibold mb-8">Experiência e Formação Acadêmica</h2>

      <div className="w-full max-w-3xl mb-12">
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 pb-2">Experiência Profissional</h3>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-yellow-500">GEAP - Autogestão em Saúde</h4>
          <p className="text-gray-300 italic">Estagiário de TI | Março 2021 - Dezembro 2022</p>
          <p className="text-gray-400">João Pessoa, Paraíba, Brasil</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
            <li>Presto suporte técnico N1 em equipamentos de telefonia, impressoras, computadores e notebooks.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-yellow-500">MDR SAÚDE</h4>
          <p className="text-gray-300 italic">Analista de Sistemas | Fevereiro 2023 - Agosto 2024</p>
          <p className="text-gray-400">João Pessoa, Paraíba, Brasil</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
            <li>Preparação e manutenção de equipamentos de informática, suporte técnico N1 e N2.</li>
            <li>Integrações entre sistemas, implementação de soluções Azure Microsoft e infraestrutura de rede.</li>
            <li>Suporte no sistema Viman OPME, WMS Roma, TOTVS Protheus, TOTVS RM e AD local.</li>
            <li>Monitoramento e atendimento de chamados via GLPI e suporte remoto (Anydesk, UltraVNC, Microsoft Teams, etc.).</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-yellow-500">HOSPITAL RESIDENCIAL</h4>
          <p className="text-gray-300 italic">Analista de Sistemas | Setembro 2024 - Emprego Atual</p>
          <p className="text-gray-400">João Pessoa, Paraíba, Brasil</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
            <li>Estruturação de dados no banco Oracle e implantação de relatórios com Power BI.</li>
            <li>Suporte técnico N1 e N2, implementação de soluções Microsoft e infraestrutura de rede.</li>
            <li>Suporte no sistema IW, monitoramento via OSTicket e suporte remoto (Anydesk e Milvus).</li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-3xl mb-12">
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 pb-2">Formação Acadêmica</h3>

        <ul className="list-disc ml-6 space-y-4 text-gray-300">
          <li>
            <span className="font-bold text-yellow-500">Bacharelado em Redes de Computadores</span> - FPB - Faculdade Internacional da Paraíba
            <br />
            <span className="text-gray-400">2018 - Trancado</span>
          </li>
          <li>
            <span className="font-bold text-yellow-500">Bacharelado em Ciências da Computação</span> - FPB - Faculdade Internacional da Paraíba
            <br />
            <span className="text-gray-400">2019 - 2022</span>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-3xl">
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 pb-2">Cursos Extracurriculares</h3>

        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>Scrum Foundation Professional Certificate (SFPC ™)</li>
          <li>Kanban Foundation (KIKF ™)</li>
          <li>HTML, CSS e JavaScript</li>
          <li>React JS</li>
          <li>Git e GitHub</li>
          <li>NLW Pocket: Javascript - Full-stack Intermediário</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;