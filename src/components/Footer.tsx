import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import type { IconType } from "react-icons";
const navegar = [
  { href: "#inicio", label: "Início" },
  { href: "#wwa", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#Projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
interface SocialIcon {
  id:string;
  href: string;
  target?: string;
  rel?: string;
  "aria-label": string;
  icon: IconType;
}

const icons: SocialIcon[] = [
  {
    id:"git",
    href: "https://github.com/pedro-fernandes0302",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub",
    icon: FaGithub,
  },{
  id:"email",
  href:"mailto:pedrofernandesdejesus10@gmail.com",
  "aria-label":"E-mail",
  icon:FaEnvelope,
  },
  { 
    id:"zap",
    href:"https://wa.me/5562993874401",
    target:"_blank",
    rel:"noopener noreferrer",
    "aria-label":"WhatsApp",
    icon:FaWhatsapp
  }
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
  {icons.map((item) => {
    const Icon = item.icon;

    return (
      <a
        href={item.href}
        target={item.target}
        rel={item.rel}
        aria-label={item["aria-label"]}
      >
        <Icon id={item.id} aria-hidden="true" />
      </a>
    );
  })}
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