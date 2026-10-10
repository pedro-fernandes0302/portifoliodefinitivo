import "./Processo.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const etapas = [
  {
    titulo: "Imersão",
    texto:
      "Entendemos o problema de verdade e saímos com escopo e proposta antes de começar.",
  },
  {
    titulo: "Planejamento",
    texto:
      "Definimos as escolhas que sustentam o projeto e registramos tudo em um documento claro.",
  },
  {
    titulo: "Design",
    texto:
      "Desenhamos as telas e o caminho do usuário. Você aprova antes de virar código.",
  },
  {
    titulo: "Desenvolvimento",
    texto:
      "Entregas em ciclos curtos, com um endereço de teste sempre no ar para você acompanhar.",
  },
  {
    titulo: "Testes",
    texto:
      "Testamos tudo antes de publicar, para quebrar antes que o seu cliente quebre.",
  },
  {
    titulo: "Publicação e suporte",
    texto:
      "Entra no ar com acompanhamento e atenção caso algo saia do lugar.",
  },
];

export default function Processo() {
    const  listaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".etapas li",
        { opacity: 0,x:-80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listaRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, listaRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <section className="processo" id="processo">
      <div className="contem" ref={listaRef}>
        <h2 className="sobre-titulo">
          Do planejamento <span className="destaque">até</span> o resultado
        </h2>
        <p className="sub">
          Como pensamos para chegar no melhor resultado{" "}
          <strong>para você</strong>
        </p>

        <ol className="etapas" >
          {etapas.map((e, i) => (
            <li key={e.titulo}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
