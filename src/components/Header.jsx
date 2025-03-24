import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="py-4 bg-zinc-900 w-full fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center px-6 md:px-10">
        <h1 className="text-2xl text-yellow-500 font-bold">Meu Portfólio</h1>

        {/* Ícone de menu para telas pequenas */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-500 transition duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex gap-6 text-gray-300 text-lg font-semibold">
          <button onClick={() => scrollToSection("sobre")} className="hover:text-yellow-500 transition duration-200">
            Sobre
          </button>
          <button onClick={() => scrollToSection("habilidades")} className="hover:text-yellow-500 transition duration-200">
            Habilidades
          </button>
          <button onClick={() => scrollToSection("experiencias")} className="hover:text-yellow-500 transition duration-200">
            Experiências
          </button>
          <button onClick={() => scrollToSection("projetos")} className="hover:text-yellow-500 transition duration-200">
            Projetos
          </button>
          <button onClick={() => scrollToSection("contato")} className="hover:text-yellow-500 transition duration-200">
            Contato
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-zinc-800 flex flex-col items-center py-4 gap-4 text-gray-300 font-semibold text-lg">
          <button onClick={() => scrollToSection("sobre")} className="hover:text-yellow-500 transition duration-200">
            Sobre
          </button>
          <button onClick={() => scrollToSection("habilidades")} className="hover:text-yellow-500 transition duration-200">
            Habilidades
          </button>
          <button onClick={() => scrollToSection("experiencias")} className="hover:text-yellow-500 transition duration-200">
            Experiências
          </button>
          <button onClick={() => scrollToSection("projetos")} className="hover:text-yellow-500 transition duration-200">
            Projetos
          </button>
          <button onClick={() => scrollToSection("contato")} className="hover:text-yellow-500 transition duration-200">
            Contato
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;