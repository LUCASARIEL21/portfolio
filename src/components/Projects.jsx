import React from "react";
import financeControl from "../assets/finance-control.png";
import climax from "../assets/climax.png";
import people4devs from "../assets/people-4devs.png";
import pocketTs from "../assets/pocket-ts.png";
import apiUsers from "../assets/api-users.png";
import brookfieldSolutions from "../assets/brookfieldSolutions.png";
import projetoVenc from "../assets/projeto-venc.png";
import iaroffice from "../assets/iaroffice.png";
import Onebitcode from "../assets/Onebitcode.png";

const projectsData = [
  {
    name: "Finance-Control",
    img: financeControl,
    description: "Site de controle financeiro para gerenciar entradas, saídas e saldo total.",
    link: "https://finance-control-dev.netlify.app",
  },
  {
    name: "Climax",
    img: climax,
    description: "Aplicação para verificar o clima de qualquer cidade do mundo.",
    link: "https://climax-city.netlify.app",
  },
  {
    name: "People 4devs",
    img: people4devs,
    description: "Ferramentas úteis para desenvolvedores.",
    link: "https://tools-4people.netlify.app",
  },
  {
    name: "POCKET-TS",
    img: pocketTs,
    description: "Projeto full-stack com Node.js e ReactJS.",
    link: "https://github.com/LUCASARIEL21/POCKET-JS",
  },
  {
    name: "api-users",
    img: apiUsers,
    description: "API para gerenciamento de usuários utilizando Node.js.",
    link: "https://github.com/LUCASARIEL21/api-users",
  },
  {
    name: "Brookfield Solutions",
    img: brookfieldSolutions,
    description: "Site da construtora Brookfield Solutions.",
    link: "https://brookfieldsolutions.us/",
  },
  {
    name: "Projeto-Venc",
    img: projetoVenc,
    description: "Clone da OLX para o TCC da graduação.",
    link: "https://github.com/LUCASARIEL21/Projeto-Venc",
  },
  {
    name: "IAR Office",
    img: iaroffice,
    description: "Site de apresentação da empresa IAR Office.",
    link: "https://iaroffice.com.br/",
  },
  {
    name: "Onebitcode",
    img: Onebitcode,
    description: "Desafio onebitcode para html e css.",
    link: "https://github.com/LUCASARIEL21/projeto-onebitcode-start-program",
  },
];

const Projects = () => (
  <section className="py-20 px-6 bg-slate-900/85 text-white" id="projetos">
    <div className="mx-auto max-w-6xl">
      <p className="uppercase tracking-[0.2em] text-xs text-amber-300 mb-2">Portfólio</p>
      <h2 className="text-4xl md:text-5xl font-black mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
        <a
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-slate-950/70 border border-white/10 p-4 rounded-2xl shadow-lg hover:-translate-y-1 hover:border-amber-300/50 transition-all"
        >
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-44 object-cover rounded-xl mb-4"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-xl font-bold mb-2 text-amber-200 group-hover:text-amber-100">{project.name}</h3>
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
          <span className="inline-block mt-4 text-sm text-slate-200 group-hover:text-amber-200">Acessar projeto →</span>
        </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;