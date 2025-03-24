import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Use a chave pública aqui
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error.text);
          alert("Erro ao enviar a mensagem. Tente novamente.");
        }
      );
  };

  return (
    <section className="h-full bg-gray-900 text-white flex items-center justify-center p-4" id="contato">
      <div className="flex flex-col items-center w-full max-w-4xl mb-4">
        <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
          <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0">
            <a
              href="https://github.com/LUCASARIEL21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-500 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-cunha-0ab3721ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/lucas_arielf/profilecard/?igsh=Y2RrYmVmYXVoaTJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-400 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-96">
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
                className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu E-mail"
                required
                className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                required
                rows="4"
                className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold p-2 rounded transition duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;