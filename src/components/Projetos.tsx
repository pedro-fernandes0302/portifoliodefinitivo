import "./Projetos.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiVercel, SiNetlify } from "react-icons/si";
gsap.registerPlugin(ScrollTrigger);

export interface Projeto {
  id: number;
  imagem: string;
  titulo: string;
  legenda?: string;
  alt: string;
  tecnologias: string[];
  github?: string; // link do repositório
  deploy?: string; // link do site no ar (Vercel, Netlify, etc.)
}

export const PROJETOS: Projeto[] = [
  {
    id: 1,
    imagem: "/eloons.png",
    titulo: "Landing page Eloons",
    legenda: "Site institucional",
    alt: "Prévia da landing page da Eloons",
    tecnologias: ["React", "Vite", "CSS"],
    deploy: "https://eloonscompany.vercel.app/#Projetos",
  },
  {
    id: 2,
    imagem: "/barbearia.jpeg",
    titulo: "Agendamento para barbeiro",
    legenda: "Sistema de gestão",
    alt: "Projeto Barbeiro",
    tecnologias: ["React", "TypeScript", "Vite", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/pedro-fernandes0302/projeto.barbeiro2",
  },
  {
    id: 3,
    imagem: "/painel-rv-pedro-fernandes.png", // troque pela imagem real do painel
    titulo: "Painel de metas e promoções",
    legenda: "Vendo dados em tempo real",
    alt: "Painel de metas",
    tecnologias: ["React", "TypeScript", "Vite","BigQuery","Docker", "FastAPI","Python"], // preencha com o que você usou
    github: "https://github.com/pedro-fernandes0302/paineldemetas",
  },
];

// escolhe o ícone do site conforme o endereço
function iconeDoDeploy(url: string) {
  if (url.includes("vercel")) return { Icone: SiVercel, nome: "Vercel" };
  if (url.includes("netlify")) return { Icone: SiNetlify, nome: "Netlify" };
  return { Icone: FaExternalLinkAlt, nome: "site" };
}

export default function Projetos() {
  const listaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portifolio .card",
        { opacity: 0, y: -80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: listaRef.current,
            start: "top 520px",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, listaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projetos" id="Projetos">
      <div className="contem">
        <h2 className="Titulo">
          Projetos que eu <span className="destaque">fiz</span>
        </h2>
        <p className="sub">Projetos que mostram minhas capacidades de criar soluções</p>

        <div className="portifolio" ref={listaRef}>
          {PROJETOS.map((p) => {
            const deploy = p.deploy ? iconeDoDeploy(p.deploy) : null;

            return (
              <div className="card" key={p.id}>
                <img src={p.imagem} alt={p.alt} loading="lazy" />
                <div className="overlay"></div>

                <div className="acoes">
                  {p.github && (
                    <a
                      className="acao"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Código de ${p.titulo} no GitHub`}
                      title="Ver código no GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {p.deploy && deploy && (
                    <a
                      className="acao"
                      href={p.deploy}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${p.titulo} no ar`}
                      title={`Abrir no ${deploy.nome}`}
                    >
                      <deploy.Icone />
                    </a>
                  )}
                </div>

                <div className="info">
                  <h3>{p.titulo}</h3>
                  {p.legenda && <p className="legenda">{p.legenda}</p>}
                  {p.tecnologias.length > 0 && (
                    <div className="tecnologias">
                      {p.tecnologias.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}