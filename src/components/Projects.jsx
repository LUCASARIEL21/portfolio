import React from "react";
import financeControl from "../assets/finance-control.png";
import climax from "../assets/climax.png";
import people4devs from "../assets/people-4devs.png";
import pocketTs from "../assets/pocket-ts.png";
import apiUsers from "../assets/api-users.png";
import landingPageCarros from "../assets/landing-page-carros.png";
import projetoVenc from "../assets/projeto-venc.png";
import analiseXml from "../assets/analise-de-xml.png";
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
    name: "landing-page-carros",
    img: landingPageCarros,
    description: "Site de apresentação de carros de luxo.",
    link: "https://github.com/LUCASARIEL21/landing-page-carros",
  },
  {
    name: "Projeto-Venc",
    img: projetoVenc,
    description: "Clone da OLX para o TCC da graduação.",
    link: "https://github.com/LUCASARIEL21/Projeto-Venc",
  },
  {
    name: "Analise-de-XML",
    img: analiseXml,
    description: "Exportação de dados de nota fiscal para PDF.",
    link: "https://github.com/LUCASARIEL21/Analise-de-XML",
  },
  {
    name: "Onebitcode",
    img: Onebitcode,
    description: "Desafio onebitcode para html e css.",
    link: "https://github.com/LUCASARIEL21/projeto-onebitcode-start-program",
  },
];

const Projects = () => (
  <section className="min-h-screen bg-gray-800 text-white p-6 flex flex-col justify-center items-center" id="projetos">
    <h2 className="text-4xl font-semibold mb-6">Meus Projetos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <img src={project.img} alt={project.name} className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-300">{project.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;