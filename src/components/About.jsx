import React from "react";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${window.location.origin}/Currículo.pdf`;
    link.download = "Lucas_Ariel_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="relative overflow-hidden min-h-screen flex justify-center items-center px-6 pt-28 pb-16"
      id="sobre"
    >
      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        <img
          src="/foto-perfil.jpg"
          alt="Foto de Lucas Ariel"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl shadow-amber-500/20 border-4 border-white/10"
        />
        <div className="text-center md:text-left">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-300 mb-3">Analista de Sistemas e Desenvolvedor</p>
          <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">Lucas Ariel</h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mb-7 leading-relaxed">
            Formado em Ciências da Computação na FPB. Busco sempre aprender
            coisas novas sobre a área de TI, aprendendo com especialistas e
            trabalhando bem em equipe.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <button
              onClick={handleDownload}
              className="px-7 py-3 rounded-full bg-amber-300 text-slate-900 font-semibold hover:bg-amber-200 transition duration-300"
            >
              Download CV
            </button>
            <a
              href="#projetos"
              className="px-7 py-3 rounded-full border border-slate-600 text-slate-100 hover:border-amber-300 hover:text-amber-300 transition duration-300"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
