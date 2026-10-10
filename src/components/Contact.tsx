import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import Obrigado from "./Obrigadopage";

export default function Contact() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // impede o navegador de sair do site

    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form));
    setEnviando(true);
    setErro(false);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/pedrofernandesdejesus10@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dados),
        }
      );

      const json = await res.json();
      // o FormSubmit devolve success como texto "true" ou booleano, dependendo do caso
      const ok = res.ok && (json.success === true || json.success === "true");

      if (!ok) throw new Error("Falha no envio");

      form.reset();
      setEnviado(true);
    } catch {
      setErro(true);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="contact" id="contato">
      <div className="contem contato-grade">
        <div className="contato-texto">
          <p className="rotulo">// contato</p>
          <h2 className="sobre-titulo">
            Me conta o problema, que eu{" "}
            <span className="destaque">resolvo.</span>
          </h2>
          <p className="sub">
            Pode ser um processo manual que te toma tempo, um site que precisa
            sair do papel ou só uma ideia ainda crua. Fale direto comigo, pelo
            WhatsApp ou pelo formulário.
          </p>
          <a
            href="https://wa.me/5562993874401"
            target="_blank"
            rel="noopener noreferrer"
            className="wth-btn"
          >
            <FaWhatsapp aria-hidden="true" /> Chamar no WhatsApp
          </a>
        </div>

        {enviado ? (
          <Obrigado onVoltar={() => setEnviado(false)} />
        ) : (
          <form onSubmit={handleSubmit} className="form-card">
            <h3 className="form-titulo">Envie sua mensagem</h3>

            <div className="form-corpo">
              <div className="form-linha">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Seu nome"
                  aria-label="Seu nome"
                  autoComplete="name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Seu e-mail"
                  aria-label="Seu e-mail"
                  autoComplete="email"
                  required
                />
              </div>

              <input
                type="text"
                name="_subject"
                id="assunto"
                placeholder="Assunto"
                aria-label="Assunto"
                required
              />

              <textarea
                name="message"
                id="message"
                placeholder="Conte o que você precisa"
                aria-label="Sua mensagem"
                required
                style={{ resize: "none" }}
              ></textarea>

              <input type="hidden" name="_captcha" value="false" />

              {/* campo-isca: robôs preenchem, pessoas não veem */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              {erro && (
                <p role="alert" style={{ color: "#ff6b6b", fontSize: 14 }}>
                  Não consegui enviar agora. Tente de novo ou me chame no
                  WhatsApp.
                </p>
              )}

              <button type="submit" disabled={enviando}>
                {enviando ? "Enviando…" : "Enviar mensagem"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}