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
      className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6"
      id="sobre"
    >
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-10">
        <img
          src="/src/assets/foto-perfil.jpg"
          alt="Foto de Lucas Ariel"
          className="w-72 h-72 object-cover rounded-full shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Lucas Ariel</h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mb-6">
            Formado em Ciências da Computação na FPB. Busco sempre aprender coisas novas sobre a área de TI, aprendendo com especialistas e trabalhando bem em equipe.
          </p>
          <button
            onClick={handleDownload}
            className="px-6 py-2 border-2 border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;