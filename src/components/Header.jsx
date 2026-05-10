import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: "sobre", label: "Sobre" },
    { id: "habilidades", label: "Habilidades" },
    { id: "experiencias", label: "Experiências" },
    { id: "projetos", label: "Projetos" },
    { id: "contato", label: "Contato" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl justify-between items-center px-6 py-4 md:px-10">
        <h1 className="text-2xl text-amber-300 font-bold tracking-tight">Lucas Ariel</h1>

        <button
          className="md:hidden text-slate-300 hover:text-amber-300 transition duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex gap-6 text-slate-200 text-base font-semibold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-amber-300 transition duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-slate-900/95 flex flex-col items-center py-4 gap-4 text-slate-200 font-semibold text-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-amber-300 transition duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;