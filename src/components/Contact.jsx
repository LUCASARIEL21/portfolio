import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    setStatusType("idle");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusType("success");
      setStatusMessage("Mensagem enviada com sucesso. Obrigado pelo contato!");
      form.current.reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatusType("error");
      setStatusMessage("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-950/80 text-white" id="contato">
      <div className="mx-auto flex flex-col items-center w-full max-w-5xl">
        <p className="uppercase tracking-[0.2em] text-xs text-amber-300 mb-2">Vamos Conversar</p>
        <h1 className="text-4xl md:text-5xl font-black mb-8">Entre em Contato</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-8">
          <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-2 md:mb-0">
            <a
              href="https://github.com/LUCASARIEL21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl rounded-full border border-white/10 p-3 hover:text-amber-300 hover:border-amber-300/50 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-cunha-0ab3721ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl rounded-full border border-white/10 p-3 hover:text-amber-300 hover:border-amber-300/50 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/lucas_arielf/profilecard/?igsh=Y2RrYmVmYXVoaTJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl rounded-full border border-white/10 p-3 hover:text-amber-300 hover:border-amber-300/50 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="bg-slate-900/70 border border-white/10 p-6 rounded-2xl shadow-lg w-full md:w-[28rem]">
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <label htmlFor="contact-name" className="text-sm text-slate-300">Seu nome</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
                className="p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <label htmlFor="contact-email" className="text-sm text-slate-300">Seu e-mail</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Seu E-mail"
                required
                className="p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <label htmlFor="contact-message" className="text-sm text-slate-300">Sua mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Sua Mensagem"
                required
                rows="4"
                className="p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
              ></textarea>
              <button
                type="submit"
                disabled={isSending}
                className="bg-amber-300 hover:bg-amber-200 disabled:opacity-70 disabled:cursor-not-allowed text-slate-900 font-semibold p-3 rounded-lg transition duration-300"
              >
                {isSending ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {statusMessage && (
                <p
                  className={`text-sm ${
                    statusType === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;