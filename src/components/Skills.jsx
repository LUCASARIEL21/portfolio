import React from "react";

const skillsData = [
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Ambiente de execução JavaScript no servidor.",
  },
  {
    name: "ReactJS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Biblioteca JavaScript para interfaces de usuário.",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Linguagem de programação para web.",
  },
  {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Linguagem de marcação para estrutura de páginas web.",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Estilização para páginas web.",
  },
  {
    name: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Plataforma de virtualização de containers.",
  },
  {
    name: "Git & GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Controle de versão e repositório remoto.",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Banco de dados relacional.",
  },
  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "Banco de dados NoSQL orientado a documentos.",
  },
  {
    name: "Oracle",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    description: "Banco de dados relacional corporativo.",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Banco de dados relacional avançado.",
  },
  {
    name: "Suporte Técnico",
    img: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
    description: "Assistência técnica e resolução de problemas.",
  },
];

const Skills = () => {
  return (
    <section className="h-full bg-gray-800 text-white flex flex-col justify-center items-center px-4" id="habilidades">
      <h2 className="text-4xl font-semibold mb-6 mt-3">Minhas Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-300 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;