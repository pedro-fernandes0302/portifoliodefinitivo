import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const navegar = [
  { href: "#inicio", label: "Início" },
  { href: "#wwa", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#Projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contem footer-grade">
        <div className="footer-marca">
          <p className="footer-nome">Pedro Fernandes</p>
          <p className="footer-frase">
            Entender o problema antes de escrever a primeira linha, e{" "}
            <span className="destaque">automatizar</span> o que não faz sentido
            ser manual.
          </p>
        </div>

        <div>
          <h4>Navegar</h4>
          <ul>
            {navegar.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <div className="icons">
            <a
              href="https://github.com/pedro-fernandes0302"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub id="git" aria-hidden="true" />
            </a>
            <a
              href="mailto:pedrofernandesdejesus10@gmail.com"
              aria-label="E-mail"
            >
              <FaEnvelope id="icon-email" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/5562993874401"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp id="zap" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <p className="copy">
        &copy; {new Date().getFullYear()} Pedro Fernandes · Feito com React e
        muita curiosidade.
      </p>
    </footer>
  );
}